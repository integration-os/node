/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum CustomerType {
    Retail = "retail",
    Wholesale = "wholesale",
    Online = "online",
    B2b = "b2b",
    B2c = "b2c",
    Corporate = "corporate",
}

/** @internal */
export const CustomerType$ = z.nativeEnum(CustomerType);