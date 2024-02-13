/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { CustomAttributes, CustomAttributes$ } from "./customattributes";
import { GeoCoordinates, GeoCoordinates$ } from "./geocoordinates";
import { z } from "zod";

export enum Type {
    Home = "home",
    Work = "work",
    Other = "other",
}

export type Addresses = {
    id?: string | undefined;
    contactId?: string | undefined;
    accountId?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    name?: string | undefined;
    companyName?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    street?: string | undefined;
    addressLine2?: string | undefined;
    city?: string | undefined;
    province?: string | undefined;
    region?: string | undefined;
    postalCode?: string | undefined;
    postalCodeExtension?: string | undefined;
    country?: string | undefined;
    countryCode?: string | undefined;
    type?: Type | undefined;
    geoLocation?: GeoCoordinates | undefined;
    customFields?: Array<CustomAttributes> | undefined;
    subdivisionCode?: string | undefined;
};

/** @internal */
export const Type$ = z.nativeEnum(Type);

/** @internal */
export namespace Addresses$ {
    export type Inbound = {
        id?: string | undefined;
        contactId?: string | undefined;
        accountId?: string | undefined;
        firstName?: string | undefined;
        lastName?: string | undefined;
        name?: string | undefined;
        companyName?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        street?: string | undefined;
        addressLine2?: string | undefined;
        city?: string | undefined;
        province?: string | undefined;
        region?: string | undefined;
        postalCode?: string | undefined;
        postalCodeExtension?: string | undefined;
        country?: string | undefined;
        countryCode?: string | undefined;
        type?: Type | undefined;
        geoLocation?: GeoCoordinates$.Inbound | undefined;
        customFields?: Array<CustomAttributes$.Inbound> | undefined;
        subdivisionCode?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Addresses, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            contactId: z.string().optional(),
            accountId: z.string().optional(),
            firstName: z.string().optional(),
            lastName: z.string().optional(),
            name: z.string().optional(),
            companyName: z.string().optional(),
            email: z.string().optional(),
            phone: z.string().optional(),
            street: z.string().optional(),
            addressLine2: z.string().optional(),
            city: z.string().optional(),
            province: z.string().optional(),
            region: z.string().optional(),
            postalCode: z.string().optional(),
            postalCodeExtension: z.string().optional(),
            country: z.string().optional(),
            countryCode: z.string().optional(),
            type: Type$.optional(),
            geoLocation: GeoCoordinates$?.inboundSchema.optional(),
            customFields: z.array(CustomAttributes$?.inboundSchema).optional(),
            subdivisionCode: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.contactId === undefined ? null : { contactId: v.contactId }),
                ...(v.accountId === undefined ? null : { accountId: v.accountId }),
                ...(v.firstName === undefined ? null : { firstName: v.firstName }),
                ...(v.lastName === undefined ? null : { lastName: v.lastName }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.companyName === undefined ? null : { companyName: v.companyName }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.phone === undefined ? null : { phone: v.phone }),
                ...(v.street === undefined ? null : { street: v.street }),
                ...(v.addressLine2 === undefined ? null : { addressLine2: v.addressLine2 }),
                ...(v.city === undefined ? null : { city: v.city }),
                ...(v.province === undefined ? null : { province: v.province }),
                ...(v.region === undefined ? null : { region: v.region }),
                ...(v.postalCode === undefined ? null : { postalCode: v.postalCode }),
                ...(v.postalCodeExtension === undefined
                    ? null
                    : { postalCodeExtension: v.postalCodeExtension }),
                ...(v.country === undefined ? null : { country: v.country }),
                ...(v.countryCode === undefined ? null : { countryCode: v.countryCode }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.geoLocation === undefined ? null : { geoLocation: v.geoLocation }),
                ...(v.customFields === undefined ? null : { customFields: v.customFields }),
                ...(v.subdivisionCode === undefined
                    ? null
                    : { subdivisionCode: v.subdivisionCode }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        contactId?: string | undefined;
        accountId?: string | undefined;
        firstName?: string | undefined;
        lastName?: string | undefined;
        name?: string | undefined;
        companyName?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        street?: string | undefined;
        addressLine2?: string | undefined;
        city?: string | undefined;
        province?: string | undefined;
        region?: string | undefined;
        postalCode?: string | undefined;
        postalCodeExtension?: string | undefined;
        country?: string | undefined;
        countryCode?: string | undefined;
        type?: Type | undefined;
        geoLocation?: GeoCoordinates$.Outbound | undefined;
        customFields?: Array<CustomAttributes$.Outbound> | undefined;
        subdivisionCode?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Addresses> = z
        .object({
            id: z.string().optional(),
            contactId: z.string().optional(),
            accountId: z.string().optional(),
            firstName: z.string().optional(),
            lastName: z.string().optional(),
            name: z.string().optional(),
            companyName: z.string().optional(),
            email: z.string().optional(),
            phone: z.string().optional(),
            street: z.string().optional(),
            addressLine2: z.string().optional(),
            city: z.string().optional(),
            province: z.string().optional(),
            region: z.string().optional(),
            postalCode: z.string().optional(),
            postalCodeExtension: z.string().optional(),
            country: z.string().optional(),
            countryCode: z.string().optional(),
            type: Type$.optional(),
            geoLocation: GeoCoordinates$?.outboundSchema.optional(),
            customFields: z.array(CustomAttributes$?.outboundSchema).optional(),
            subdivisionCode: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.contactId === undefined ? null : { contactId: v.contactId }),
                ...(v.accountId === undefined ? null : { accountId: v.accountId }),
                ...(v.firstName === undefined ? null : { firstName: v.firstName }),
                ...(v.lastName === undefined ? null : { lastName: v.lastName }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.companyName === undefined ? null : { companyName: v.companyName }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.phone === undefined ? null : { phone: v.phone }),
                ...(v.street === undefined ? null : { street: v.street }),
                ...(v.addressLine2 === undefined ? null : { addressLine2: v.addressLine2 }),
                ...(v.city === undefined ? null : { city: v.city }),
                ...(v.province === undefined ? null : { province: v.province }),
                ...(v.region === undefined ? null : { region: v.region }),
                ...(v.postalCode === undefined ? null : { postalCode: v.postalCode }),
                ...(v.postalCodeExtension === undefined
                    ? null
                    : { postalCodeExtension: v.postalCodeExtension }),
                ...(v.country === undefined ? null : { country: v.country }),
                ...(v.countryCode === undefined ? null : { countryCode: v.countryCode }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.geoLocation === undefined ? null : { geoLocation: v.geoLocation }),
                ...(v.customFields === undefined ? null : { customFields: v.customFields }),
                ...(v.subdivisionCode === undefined
                    ? null
                    : { subdivisionCode: v.subdivisionCode }),
            };
        });
}
