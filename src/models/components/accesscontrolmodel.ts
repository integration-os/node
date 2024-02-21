/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum AccessControlModel {
    Rbac = "rbac",
    Abac = "abac",
    Dac = "dac",
    Mac = "mac",
    Custom = "custom",
    None = "none",
}

/** @internal */
export const AccessControlModel$ = z.nativeEnum(AccessControlModel);
