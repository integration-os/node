/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Addresses, Addresses$ } from "./addresses";
import { CustomAttributes, CustomAttributes$ } from "./customattributes";
import { Emails, Emails$ } from "./emails";
import { LeadSource, LeadSource$ } from "./leadsource";
import { Notes, Notes$ } from "./notes";
import { Opportunities, Opportunities$ } from "./opportunities";
import { Phones, Phones$ } from "./phones";
import { SocialProfiles, SocialProfiles$ } from "./socialprofiles";
import { z } from "zod";

export enum LeadStatus {
    New = "New",
    Open = "Open",
    InProcess = "InProcess",
    Converted = "Converted",
    Unqualified = "Unqualified",
    AttemptedToContact = "AttemptedToContact",
    Connected = "Connected",
    BadTiming = "BadTiming",
}

export enum LeadsPreferredContactMethod {
    Email = "Email",
    Phone = "Phone",
    Text = "Text",
    Mail = "Mail",
    InPerson = "InPerson",
}

export type Leads = {
    id?: string | undefined;
    name?: string | undefined;
    firstName?: string | undefined;
    middleName?: string | undefined;
    lastName?: string | undefined;
    opportunities?: Array<Opportunities> | undefined;
    defaultEmail?: string | undefined;
    emails?: Array<Emails> | undefined;
    defaultPhone?: string | undefined;
    phones?: Array<Phones> | undefined;
    companyName?: string | undefined;
    jobTitle?: string | undefined;
    website?: string | undefined;
    leadSource?: LeadSource | undefined;
    leadStatus?: LeadStatus | undefined;
    industry?: string | undefined;
    numberOfEmployees?: number | undefined;
    annualRevenue?: number | undefined;
    addresses?: Array<Addresses> | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    preferredContactMethod?: LeadsPreferredContactMethod | undefined;
    socialProfiles?: Array<SocialProfiles> | undefined;
    customFields?: Array<CustomAttributes> | undefined;
    notes?: Array<Notes> | undefined;
    modifyToken?: string | undefined;
};

/** @internal */
export const LeadStatus$ = z.nativeEnum(LeadStatus);

/** @internal */
export const LeadsPreferredContactMethod$ = z.nativeEnum(LeadsPreferredContactMethod);

/** @internal */
export namespace Leads$ {
    export type Inbound = {
        id?: string | undefined;
        name?: string | undefined;
        firstName?: string | undefined;
        middleName?: string | undefined;
        lastName?: string | undefined;
        opportunities?: Array<Opportunities$.Inbound> | undefined;
        defaultEmail?: string | undefined;
        emails?: Array<Emails$.Inbound> | undefined;
        defaultPhone?: string | undefined;
        phones?: Array<Phones$.Inbound> | undefined;
        companyName?: string | undefined;
        jobTitle?: string | undefined;
        website?: string | undefined;
        leadSource?: LeadSource$.Inbound | undefined;
        leadStatus?: LeadStatus | undefined;
        industry?: string | undefined;
        numberOfEmployees?: number | undefined;
        annualRevenue?: number | undefined;
        addresses?: Array<Addresses$.Inbound> | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        preferredContactMethod?: LeadsPreferredContactMethod | undefined;
        socialProfiles?: Array<SocialProfiles$.Inbound> | undefined;
        customFields?: Array<CustomAttributes$.Inbound> | undefined;
        notes?: Array<Notes$.Inbound> | undefined;
        modifyToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Leads, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            name: z.string().optional(),
            firstName: z.string().optional(),
            middleName: z.string().optional(),
            lastName: z.string().optional(),
            opportunities: z.array(Opportunities$?.inboundSchema).optional(),
            defaultEmail: z.string().optional(),
            emails: z.array(Emails$?.inboundSchema).optional(),
            defaultPhone: z.string().optional(),
            phones: z.array(Phones$?.inboundSchema).optional(),
            companyName: z.string().optional(),
            jobTitle: z.string().optional(),
            website: z.string().optional(),
            leadSource: LeadSource$?.inboundSchema.optional(),
            leadStatus: LeadStatus$.optional(),
            industry: z.string().optional(),
            numberOfEmployees: z.number().optional(),
            annualRevenue: z.number().optional(),
            addresses: z.array(Addresses$?.inboundSchema).optional(),
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
            preferredContactMethod: LeadsPreferredContactMethod$.optional(),
            socialProfiles: z.array(SocialProfiles$?.inboundSchema).optional(),
            customFields: z.array(CustomAttributes$?.inboundSchema).optional(),
            notes: z.array(Notes$?.inboundSchema).optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.firstName === undefined ? null : { firstName: v.firstName }),
                ...(v.middleName === undefined ? null : { middleName: v.middleName }),
                ...(v.lastName === undefined ? null : { lastName: v.lastName }),
                ...(v.opportunities === undefined ? null : { opportunities: v.opportunities }),
                ...(v.defaultEmail === undefined ? null : { defaultEmail: v.defaultEmail }),
                ...(v.emails === undefined ? null : { emails: v.emails }),
                ...(v.defaultPhone === undefined ? null : { defaultPhone: v.defaultPhone }),
                ...(v.phones === undefined ? null : { phones: v.phones }),
                ...(v.companyName === undefined ? null : { companyName: v.companyName }),
                ...(v.jobTitle === undefined ? null : { jobTitle: v.jobTitle }),
                ...(v.website === undefined ? null : { website: v.website }),
                ...(v.leadSource === undefined ? null : { leadSource: v.leadSource }),
                ...(v.leadStatus === undefined ? null : { leadStatus: v.leadStatus }),
                ...(v.industry === undefined ? null : { industry: v.industry }),
                ...(v.numberOfEmployees === undefined
                    ? null
                    : { numberOfEmployees: v.numberOfEmployees }),
                ...(v.annualRevenue === undefined ? null : { annualRevenue: v.annualRevenue }),
                ...(v.addresses === undefined ? null : { addresses: v.addresses }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.preferredContactMethod === undefined
                    ? null
                    : { preferredContactMethod: v.preferredContactMethod }),
                ...(v.socialProfiles === undefined ? null : { socialProfiles: v.socialProfiles }),
                ...(v.customFields === undefined ? null : { customFields: v.customFields }),
                ...(v.notes === undefined ? null : { notes: v.notes }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        name?: string | undefined;
        firstName?: string | undefined;
        middleName?: string | undefined;
        lastName?: string | undefined;
        opportunities?: Array<Opportunities$.Outbound> | undefined;
        defaultEmail?: string | undefined;
        emails?: Array<Emails$.Outbound> | undefined;
        defaultPhone?: string | undefined;
        phones?: Array<Phones$.Outbound> | undefined;
        companyName?: string | undefined;
        jobTitle?: string | undefined;
        website?: string | undefined;
        leadSource?: LeadSource$.Outbound | undefined;
        leadStatus?: LeadStatus | undefined;
        industry?: string | undefined;
        numberOfEmployees?: number | undefined;
        annualRevenue?: number | undefined;
        addresses?: Array<Addresses$.Outbound> | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        preferredContactMethod?: LeadsPreferredContactMethod | undefined;
        socialProfiles?: Array<SocialProfiles$.Outbound> | undefined;
        customFields?: Array<CustomAttributes$.Outbound> | undefined;
        notes?: Array<Notes$.Outbound> | undefined;
        modifyToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Leads> = z
        .object({
            id: z.string().optional(),
            name: z.string().optional(),
            firstName: z.string().optional(),
            middleName: z.string().optional(),
            lastName: z.string().optional(),
            opportunities: z.array(Opportunities$?.outboundSchema).optional(),
            defaultEmail: z.string().optional(),
            emails: z.array(Emails$?.outboundSchema).optional(),
            defaultPhone: z.string().optional(),
            phones: z.array(Phones$?.outboundSchema).optional(),
            companyName: z.string().optional(),
            jobTitle: z.string().optional(),
            website: z.string().optional(),
            leadSource: LeadSource$?.outboundSchema.optional(),
            leadStatus: LeadStatus$.optional(),
            industry: z.string().optional(),
            numberOfEmployees: z.number().optional(),
            annualRevenue: z.number().optional(),
            addresses: z.array(Addresses$?.outboundSchema).optional(),
            createdAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            updatedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            preferredContactMethod: LeadsPreferredContactMethod$.optional(),
            socialProfiles: z.array(SocialProfiles$?.outboundSchema).optional(),
            customFields: z.array(CustomAttributes$?.outboundSchema).optional(),
            notes: z.array(Notes$?.outboundSchema).optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.firstName === undefined ? null : { firstName: v.firstName }),
                ...(v.middleName === undefined ? null : { middleName: v.middleName }),
                ...(v.lastName === undefined ? null : { lastName: v.lastName }),
                ...(v.opportunities === undefined ? null : { opportunities: v.opportunities }),
                ...(v.defaultEmail === undefined ? null : { defaultEmail: v.defaultEmail }),
                ...(v.emails === undefined ? null : { emails: v.emails }),
                ...(v.defaultPhone === undefined ? null : { defaultPhone: v.defaultPhone }),
                ...(v.phones === undefined ? null : { phones: v.phones }),
                ...(v.companyName === undefined ? null : { companyName: v.companyName }),
                ...(v.jobTitle === undefined ? null : { jobTitle: v.jobTitle }),
                ...(v.website === undefined ? null : { website: v.website }),
                ...(v.leadSource === undefined ? null : { leadSource: v.leadSource }),
                ...(v.leadStatus === undefined ? null : { leadStatus: v.leadStatus }),
                ...(v.industry === undefined ? null : { industry: v.industry }),
                ...(v.numberOfEmployees === undefined
                    ? null
                    : { numberOfEmployees: v.numberOfEmployees }),
                ...(v.annualRevenue === undefined ? null : { annualRevenue: v.annualRevenue }),
                ...(v.addresses === undefined ? null : { addresses: v.addresses }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.preferredContactMethod === undefined
                    ? null
                    : { preferredContactMethod: v.preferredContactMethod }),
                ...(v.socialProfiles === undefined ? null : { socialProfiles: v.socialProfiles }),
                ...(v.customFields === undefined ? null : { customFields: v.customFields }),
                ...(v.notes === undefined ? null : { notes: v.notes }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });
}