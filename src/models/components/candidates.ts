/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Attachments, Attachments$ } from "./attachments";
import { CustomAttributes, CustomAttributes$ } from "./customattributes";
import { Educations, Educations$ } from "./educations";
import {
    EmploymentAndCandidateStatus,
    EmploymentAndCandidateStatus$,
} from "./employmentandcandidatestatus";
import { Images, Images$ } from "./images";
import { Notes, Notes$ } from "./notes";
import { References, References$ } from "./references";
import { SocialProfiles, SocialProfiles$ } from "./socialprofiles";
import { WorkExperiences, WorkExperiences$ } from "./workexperiences";
import { z } from "zod";

export type Candidates = {
    id?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    email?: string | undefined;
    phoneNumber?: string | undefined;
    role?: string | undefined;
    jobId?: string | undefined;
    resume?: Attachments | undefined;
    coverLetter?: Attachments | undefined;
    profilePicture?: Images | undefined;
    socialProfiles?: Array<SocialProfiles> | undefined;
    websites?: Array<string> | undefined;
    skills?: Array<string> | undefined;
    languages?: Array<string> | undefined;
    certifications?: Array<string> | undefined;
    educations?: Array<Educations> | undefined;
    workExperiences?: Array<WorkExperiences> | undefined;
    references?: Array<References> | undefined;
    availability?: Date | undefined;
    preferredWorkLocation?: string | undefined;
    status?: EmploymentAndCandidateStatus | undefined;
    customFields?: Array<CustomAttributes> | undefined;
    notes?: Array<Notes> | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    modifyToken?: string | undefined;
};

/** @internal */
export namespace Candidates$ {
    export type Inbound = {
        id?: string | undefined;
        firstName?: string | undefined;
        lastName?: string | undefined;
        email?: string | undefined;
        phoneNumber?: string | undefined;
        role?: string | undefined;
        jobId?: string | undefined;
        resume?: Attachments$.Inbound | undefined;
        coverLetter?: Attachments$.Inbound | undefined;
        profilePicture?: Images$.Inbound | undefined;
        socialProfiles?: Array<SocialProfiles$.Inbound> | undefined;
        websites?: Array<string> | undefined;
        skills?: Array<string> | undefined;
        languages?: Array<string> | undefined;
        certifications?: Array<string> | undefined;
        educations?: Array<Educations$.Inbound> | undefined;
        workExperiences?: Array<WorkExperiences$.Inbound> | undefined;
        references?: Array<References$.Inbound> | undefined;
        availability?: string | undefined;
        preferredWorkLocation?: string | undefined;
        status?: EmploymentAndCandidateStatus | undefined;
        customFields?: Array<CustomAttributes$.Inbound> | undefined;
        notes?: Array<Notes$.Inbound> | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        modifyToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Candidates, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            firstName: z.string().optional(),
            lastName: z.string().optional(),
            email: z.string().optional(),
            phoneNumber: z.string().optional(),
            role: z.string().optional(),
            jobId: z.string().optional(),
            resume: Attachments$?.inboundSchema.optional(),
            coverLetter: Attachments$?.inboundSchema.optional(),
            profilePicture: Images$?.inboundSchema.optional(),
            socialProfiles: z.array(SocialProfiles$?.inboundSchema).optional(),
            websites: z.array(z.string()).optional(),
            skills: z.array(z.string()).optional(),
            languages: z.array(z.string()).optional(),
            certifications: z.array(z.string()).optional(),
            educations: z.array(Educations$?.inboundSchema).optional(),
            workExperiences: z.array(WorkExperiences$?.inboundSchema).optional(),
            references: z.array(References$?.inboundSchema).optional(),
            availability: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            preferredWorkLocation: z.string().optional(),
            status: EmploymentAndCandidateStatus$.optional(),
            customFields: z.array(CustomAttributes$?.inboundSchema).optional(),
            notes: z.array(Notes$?.inboundSchema).optional(),
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
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.firstName === undefined ? null : { firstName: v.firstName }),
                ...(v.lastName === undefined ? null : { lastName: v.lastName }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.phoneNumber === undefined ? null : { phoneNumber: v.phoneNumber }),
                ...(v.role === undefined ? null : { role: v.role }),
                ...(v.jobId === undefined ? null : { jobId: v.jobId }),
                ...(v.resume === undefined ? null : { resume: v.resume }),
                ...(v.coverLetter === undefined ? null : { coverLetter: v.coverLetter }),
                ...(v.profilePicture === undefined ? null : { profilePicture: v.profilePicture }),
                ...(v.socialProfiles === undefined ? null : { socialProfiles: v.socialProfiles }),
                ...(v.websites === undefined ? null : { websites: v.websites }),
                ...(v.skills === undefined ? null : { skills: v.skills }),
                ...(v.languages === undefined ? null : { languages: v.languages }),
                ...(v.certifications === undefined ? null : { certifications: v.certifications }),
                ...(v.educations === undefined ? null : { educations: v.educations }),
                ...(v.workExperiences === undefined
                    ? null
                    : { workExperiences: v.workExperiences }),
                ...(v.references === undefined ? null : { references: v.references }),
                ...(v.availability === undefined ? null : { availability: v.availability }),
                ...(v.preferredWorkLocation === undefined
                    ? null
                    : { preferredWorkLocation: v.preferredWorkLocation }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.customFields === undefined ? null : { customFields: v.customFields }),
                ...(v.notes === undefined ? null : { notes: v.notes }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        firstName?: string | undefined;
        lastName?: string | undefined;
        email?: string | undefined;
        phoneNumber?: string | undefined;
        role?: string | undefined;
        jobId?: string | undefined;
        resume?: Attachments$.Outbound | undefined;
        coverLetter?: Attachments$.Outbound | undefined;
        profilePicture?: Images$.Outbound | undefined;
        socialProfiles?: Array<SocialProfiles$.Outbound> | undefined;
        websites?: Array<string> | undefined;
        skills?: Array<string> | undefined;
        languages?: Array<string> | undefined;
        certifications?: Array<string> | undefined;
        educations?: Array<Educations$.Outbound> | undefined;
        workExperiences?: Array<WorkExperiences$.Outbound> | undefined;
        references?: Array<References$.Outbound> | undefined;
        availability?: string | undefined;
        preferredWorkLocation?: string | undefined;
        status?: EmploymentAndCandidateStatus | undefined;
        customFields?: Array<CustomAttributes$.Outbound> | undefined;
        notes?: Array<Notes$.Outbound> | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        modifyToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Candidates> = z
        .object({
            id: z.string().optional(),
            firstName: z.string().optional(),
            lastName: z.string().optional(),
            email: z.string().optional(),
            phoneNumber: z.string().optional(),
            role: z.string().optional(),
            jobId: z.string().optional(),
            resume: Attachments$?.outboundSchema.optional(),
            coverLetter: Attachments$?.outboundSchema.optional(),
            profilePicture: Images$?.outboundSchema.optional(),
            socialProfiles: z.array(SocialProfiles$?.outboundSchema).optional(),
            websites: z.array(z.string()).optional(),
            skills: z.array(z.string()).optional(),
            languages: z.array(z.string()).optional(),
            certifications: z.array(z.string()).optional(),
            educations: z.array(Educations$?.outboundSchema).optional(),
            workExperiences: z.array(WorkExperiences$?.outboundSchema).optional(),
            references: z.array(References$?.outboundSchema).optional(),
            availability: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            preferredWorkLocation: z.string().optional(),
            status: EmploymentAndCandidateStatus$.optional(),
            customFields: z.array(CustomAttributes$?.outboundSchema).optional(),
            notes: z.array(Notes$?.outboundSchema).optional(),
            createdAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            updatedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            modifyToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.firstName === undefined ? null : { firstName: v.firstName }),
                ...(v.lastName === undefined ? null : { lastName: v.lastName }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.phoneNumber === undefined ? null : { phoneNumber: v.phoneNumber }),
                ...(v.role === undefined ? null : { role: v.role }),
                ...(v.jobId === undefined ? null : { jobId: v.jobId }),
                ...(v.resume === undefined ? null : { resume: v.resume }),
                ...(v.coverLetter === undefined ? null : { coverLetter: v.coverLetter }),
                ...(v.profilePicture === undefined ? null : { profilePicture: v.profilePicture }),
                ...(v.socialProfiles === undefined ? null : { socialProfiles: v.socialProfiles }),
                ...(v.websites === undefined ? null : { websites: v.websites }),
                ...(v.skills === undefined ? null : { skills: v.skills }),
                ...(v.languages === undefined ? null : { languages: v.languages }),
                ...(v.certifications === undefined ? null : { certifications: v.certifications }),
                ...(v.educations === undefined ? null : { educations: v.educations }),
                ...(v.workExperiences === undefined
                    ? null
                    : { workExperiences: v.workExperiences }),
                ...(v.references === undefined ? null : { references: v.references }),
                ...(v.availability === undefined ? null : { availability: v.availability }),
                ...(v.preferredWorkLocation === undefined
                    ? null
                    : { preferredWorkLocation: v.preferredWorkLocation }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.customFields === undefined ? null : { customFields: v.customFields }),
                ...(v.notes === undefined ? null : { notes: v.notes }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });
}
