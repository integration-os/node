/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum UserStatus {
    Pending = "pending",
    Verified = "verified",
    Suspended = "suspended",
    Inactive = "inactive",
    Active = "active",
    Banned = "banned",
    Deleted = "deleted",
    Archived = "archived",
    WaitListed = "wait-listed",
}

/** @internal */
export const UserStatus$ = z.nativeEnum(UserStatus);
