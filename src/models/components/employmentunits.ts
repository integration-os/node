/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type EmploymentUnits = {
    name?: string | undefined;
    description?: string | undefined;
};

/** @internal */
export namespace EmploymentUnits$ {
    export type Inbound = {
        name?: string | undefined;
        description?: string | undefined;
    };

    export const inboundSchema: z.ZodType<EmploymentUnits, z.ZodTypeDef, Inbound> = z
        .object({
            name: z.string().optional(),
            description: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.description === undefined ? null : { description: v.description }),
            };
        });

    export type Outbound = {
        name?: string | undefined;
        description?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EmploymentUnits> = z
        .object({
            name: z.string().optional(),
            description: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.description === undefined ? null : { description: v.description }),
            };
        });
}
