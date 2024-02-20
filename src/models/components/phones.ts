/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { DeviceUsageType, DeviceUsageType$ } from "./deviceusagetype";
import { z } from "zod";

export type Phones = {
    phone?: string | undefined;
    country?: string | undefined;
    countryCode?: string | undefined;
    type?: DeviceUsageType | undefined;
};

/** @internal */
export namespace Phones$ {
    export type Inbound = {
        phone?: string | undefined;
        country?: string | undefined;
        countryCode?: string | undefined;
        type?: DeviceUsageType | undefined;
    };

    export const inboundSchema: z.ZodType<Phones, z.ZodTypeDef, Inbound> = z
        .object({
            phone: z.string().optional(),
            country: z.string().optional(),
            countryCode: z.string().optional(),
            type: DeviceUsageType$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.phone === undefined ? null : { phone: v.phone }),
                ...(v.country === undefined ? null : { country: v.country }),
                ...(v.countryCode === undefined ? null : { countryCode: v.countryCode }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });

    export type Outbound = {
        phone?: string | undefined;
        country?: string | undefined;
        countryCode?: string | undefined;
        type?: DeviceUsageType | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Phones> = z
        .object({
            phone: z.string().optional(),
            country: z.string().optional(),
            countryCode: z.string().optional(),
            type: DeviceUsageType$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.phone === undefined ? null : { phone: v.phone }),
                ...(v.country === undefined ? null : { country: v.country }),
                ...(v.countryCode === undefined ? null : { countryCode: v.countryCode }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });
}
