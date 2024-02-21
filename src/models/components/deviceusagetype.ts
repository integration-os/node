/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum DeviceUsageType {
    Personal = "personal",
    Business = "business",
    Educational = "educational",
    Industrial = "industrial",
    Healthcare = "healthcare",
    Other = "other",
}

/** @internal */
export const DeviceUsageType$ = z.nativeEnum(DeviceUsageType);