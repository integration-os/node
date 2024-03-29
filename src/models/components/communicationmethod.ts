/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum CommunicationMethod {
    Email = "email",
    Phone = "phone",
    Text = "text",
    Mail = "mail",
    InPerson = "in-person",
    Sms = "sms",
    PushNotification = "push-notification",
    InstantMessage = "instant-message",
    SocialMedia = "social-media",
    VideoCall = "video-call",
    Other = "other",
}

/** @internal */
export const CommunicationMethod$ = z.nativeEnum(CommunicationMethod);
