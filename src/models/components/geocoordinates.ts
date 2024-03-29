/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type GeoCoordinates = {
    latitude?: number | undefined;
    longitude?: number | undefined;
    altitude?: number | undefined;
    accuracy?: number | undefined;
    altitudeAccuracy?: number | undefined;
    heading?: number | undefined;
    speed?: number | undefined;
    timestamp?: Date | undefined;
};

/** @internal */
export namespace GeoCoordinates$ {
    export type Inbound = {
        latitude?: number | undefined;
        longitude?: number | undefined;
        altitude?: number | undefined;
        accuracy?: number | undefined;
        altitudeAccuracy?: number | undefined;
        heading?: number | undefined;
        speed?: number | undefined;
        timestamp?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GeoCoordinates, z.ZodTypeDef, Inbound> = z
        .object({
            latitude: z.number().optional(),
            longitude: z.number().optional(),
            altitude: z.number().optional(),
            accuracy: z.number().optional(),
            altitudeAccuracy: z.number().optional(),
            heading: z.number().optional(),
            speed: z.number().optional(),
            timestamp: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.latitude === undefined ? null : { latitude: v.latitude }),
                ...(v.longitude === undefined ? null : { longitude: v.longitude }),
                ...(v.altitude === undefined ? null : { altitude: v.altitude }),
                ...(v.accuracy === undefined ? null : { accuracy: v.accuracy }),
                ...(v.altitudeAccuracy === undefined
                    ? null
                    : { altitudeAccuracy: v.altitudeAccuracy }),
                ...(v.heading === undefined ? null : { heading: v.heading }),
                ...(v.speed === undefined ? null : { speed: v.speed }),
                ...(v.timestamp === undefined ? null : { timestamp: v.timestamp }),
            };
        });

    export type Outbound = {
        latitude?: number | undefined;
        longitude?: number | undefined;
        altitude?: number | undefined;
        accuracy?: number | undefined;
        altitudeAccuracy?: number | undefined;
        heading?: number | undefined;
        speed?: number | undefined;
        timestamp?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GeoCoordinates> = z
        .object({
            latitude: z.number().optional(),
            longitude: z.number().optional(),
            altitude: z.number().optional(),
            accuracy: z.number().optional(),
            altitudeAccuracy: z.number().optional(),
            heading: z.number().optional(),
            speed: z.number().optional(),
            timestamp: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.latitude === undefined ? null : { latitude: v.latitude }),
                ...(v.longitude === undefined ? null : { longitude: v.longitude }),
                ...(v.altitude === undefined ? null : { altitude: v.altitude }),
                ...(v.accuracy === undefined ? null : { accuracy: v.accuracy }),
                ...(v.altitudeAccuracy === undefined
                    ? null
                    : { altitudeAccuracy: v.altitudeAccuracy }),
                ...(v.heading === undefined ? null : { heading: v.heading }),
                ...(v.speed === undefined ? null : { speed: v.speed }),
                ...(v.timestamp === undefined ? null : { timestamp: v.timestamp }),
            };
        });
}
