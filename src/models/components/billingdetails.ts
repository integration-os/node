/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Addresses, Addresses$ } from "./addresses";
import { CustomAttributes, CustomAttributes$ } from "./customattributes";
import { PaymentMethods, PaymentMethods$ } from "./paymentmethods";
import { z } from "zod";

export enum BillingDetailsPaymentTerms {
    Net30 = "net-30",
    Net60 = "net-60",
    DueOnReceipt = "due-on-receipt",
    DueEndOfMonth = "due-end-of-month",
}

export enum BillingDetailsCurrency {
    Aed = "AED",
    Afn = "AFN",
    All = "ALL",
    Amd = "AMD",
    Ang = "ANG",
    Aoa = "AOA",
    Ars = "ARS",
    Aud = "AUD",
    Awg = "AWG",
    Azn = "AZN",
    Bam = "BAM",
    Bbd = "BBD",
    Bdt = "BDT",
    Bgn = "BGN",
    Bhd = "BHD",
    Bif = "BIF",
    Bmd = "BMD",
    Bnd = "BND",
    Bob = "BOB",
    Brl = "BRL",
    Bsd = "BSD",
    Btn = "BTN",
    Bwp = "BWP",
    Byn = "BYN",
    Bzd = "BZD",
    Cad = "CAD",
    Cdf = "CDF",
    Chf = "CHF",
    Clp = "CLP",
    Cny = "CNY",
    Cop = "COP",
    Crc = "CRC",
    Cuc = "CUC",
    Cup = "CUP",
    Cve = "CVE",
    Czk = "CZK",
    Djf = "DJF",
    Dkk = "DKK",
    Dop = "DOP",
    Dzd = "DZD",
    Egp = "EGP",
    Ern = "ERN",
    Etb = "ETB",
    Eur = "EUR",
    Fjd = "FJD",
    Fkp = "FKP",
    Fok = "FOK",
    Gbp = "GBP",
    Gel = "GEL",
    Ggp = "GGP",
    Ghs = "GHS",
    Gip = "GIP",
    Gmd = "GMD",
    Gnf = "GNF",
    Gtq = "GTQ",
    Gyd = "GYD",
    Hkd = "HKD",
    Hnl = "HNL",
    Hrk = "HRK",
    Htg = "HTG",
    Huf = "HUF",
    Idr = "IDR",
    Ils = "ILS",
    Imp = "IMP",
    Inr = "INR",
    Iqd = "IQD",
    Irr = "IRR",
    Isk = "ISK",
    Jep = "JEP",
    Jmd = "JMD",
    Jod = "JOD",
    Jpy = "JPY",
    Kes = "KES",
    Kgs = "KGS",
    Khr = "KHR",
    Kid = "KID",
    Kmf = "KMF",
    Kpw = "KPW",
    Krw = "KRW",
    Kwd = "KWD",
    Kyd = "KYD",
    Kzt = "KZT",
    Lak = "LAK",
    Lbp = "LBP",
    Lkr = "LKR",
    Lrd = "LRD",
    Lsl = "LSL",
    Lyd = "LYD",
    Mad = "MAD",
    Mdl = "MDL",
    Mga = "MGA",
    Mkd = "MKD",
    Mmk = "MMK",
    Mnt = "MNT",
    Mop = "MOP",
    Mru = "MRU",
    Mur = "MUR",
    Mvr = "MVR",
    Mwk = "MWK",
    Mxn = "MXN",
    Myr = "MYR",
    Mzn = "MZN",
    Nad = "NAD",
    Ngn = "NGN",
    Nio = "NIO",
    Nok = "NOK",
    Npr = "NPR",
    Nzd = "NZD",
    Omr = "OMR",
    Pab = "PAB",
    Pen = "PEN",
    Pgk = "PGK",
    Php = "PHP",
    Pkr = "PKR",
    Pln = "PLN",
    Pyg = "PYG",
    Qar = "QAR",
    Ron = "RON",
    Rsd = "RSD",
    Rub = "RUB",
    Rwf = "RWF",
    Sar = "SAR",
    Sbd = "SBD",
    Scr = "SCR",
    Sdg = "SDG",
    Sek = "SEK",
    Sgd = "SGD",
    Shp = "SHP",
    Sll = "SLL",
    Sos = "SOS",
    Srd = "SRD",
    Ssp = "SSP",
    Stn = "STN",
    Syp = "SYP",
    Szl = "SZL",
    Thb = "THB",
    Tjs = "TJS",
    Tmt = "TMT",
    Tnd = "TND",
    Top = "TOP",
    Try = "TRY",
    Ttd = "TTD",
    Tvd = "TVD",
    Twd = "TWD",
    Tzs = "TZS",
    Uah = "UAH",
    Ugx = "UGX",
    Usd = "USD",
    Uyu = "UYU",
    Uzs = "UZS",
    Ves = "VES",
    Vnd = "VND",
    Vuv = "VUV",
    Wst = "WST",
    Xaf = "XAF",
    Xcd = "XCD",
    Xdr = "XDR",
    Xof = "XOF",
    Xpf = "XPF",
    Yer = "YER",
    Zar = "ZAR",
    Zmw = "ZMW",
    Zwl = "ZWL",
}

export type BillingDetails = {
    id?: string | undefined;
    customerId?: string | undefined;
    fullName?: string | undefined;
    email?: string | undefined;
    phoneNumber?: string | undefined;
    address?: Addresses | undefined;
    companyName?: string | undefined;
    vatId?: string | undefined;
    paymentTerms?: BillingDetailsPaymentTerms | undefined;
    note?: string | undefined;
    defaultPaymentMethod?: PaymentMethods | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    active?: boolean | undefined;
    isDeleted?: boolean | undefined;
    currency?: BillingDetailsCurrency | undefined;
    language?: string | undefined;
    additionalAttributes?: Array<CustomAttributes> | undefined;
};

/** @internal */
export const BillingDetailsPaymentTerms$ = z.nativeEnum(BillingDetailsPaymentTerms);

/** @internal */
export const BillingDetailsCurrency$ = z.nativeEnum(BillingDetailsCurrency);

/** @internal */
export namespace BillingDetails$ {
    export type Inbound = {
        id?: string | undefined;
        customerId?: string | undefined;
        fullName?: string | undefined;
        email?: string | undefined;
        phoneNumber?: string | undefined;
        address?: Addresses$.Inbound | undefined;
        companyName?: string | undefined;
        vatId?: string | undefined;
        paymentTerms?: BillingDetailsPaymentTerms | undefined;
        note?: string | undefined;
        defaultPaymentMethod?: PaymentMethods$.Inbound | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        active?: boolean | undefined;
        isDeleted?: boolean | undefined;
        currency?: BillingDetailsCurrency | undefined;
        language?: string | undefined;
        additionalAttributes?: Array<CustomAttributes$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<BillingDetails, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            customerId: z.string().optional(),
            fullName: z.string().optional(),
            email: z.string().optional(),
            phoneNumber: z.string().optional(),
            address: Addresses$?.inboundSchema.optional(),
            companyName: z.string().optional(),
            vatId: z.string().optional(),
            paymentTerms: BillingDetailsPaymentTerms$.optional(),
            note: z.string().optional(),
            defaultPaymentMethod: PaymentMethods$?.inboundSchema.optional(),
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
            active: z.boolean().optional(),
            isDeleted: z.boolean().optional(),
            currency: BillingDetailsCurrency$.optional(),
            language: z.string().optional(),
            additionalAttributes: z.array(CustomAttributes$?.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.customerId === undefined ? null : { customerId: v.customerId }),
                ...(v.fullName === undefined ? null : { fullName: v.fullName }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.phoneNumber === undefined ? null : { phoneNumber: v.phoneNumber }),
                ...(v.address === undefined ? null : { address: v.address }),
                ...(v.companyName === undefined ? null : { companyName: v.companyName }),
                ...(v.vatId === undefined ? null : { vatId: v.vatId }),
                ...(v.paymentTerms === undefined ? null : { paymentTerms: v.paymentTerms }),
                ...(v.note === undefined ? null : { note: v.note }),
                ...(v.defaultPaymentMethod === undefined
                    ? null
                    : { defaultPaymentMethod: v.defaultPaymentMethod }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.isDeleted === undefined ? null : { isDeleted: v.isDeleted }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.language === undefined ? null : { language: v.language }),
                ...(v.additionalAttributes === undefined
                    ? null
                    : { additionalAttributes: v.additionalAttributes }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        customerId?: string | undefined;
        fullName?: string | undefined;
        email?: string | undefined;
        phoneNumber?: string | undefined;
        address?: Addresses$.Outbound | undefined;
        companyName?: string | undefined;
        vatId?: string | undefined;
        paymentTerms?: BillingDetailsPaymentTerms | undefined;
        note?: string | undefined;
        defaultPaymentMethod?: PaymentMethods$.Outbound | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        active?: boolean | undefined;
        isDeleted?: boolean | undefined;
        currency?: BillingDetailsCurrency | undefined;
        language?: string | undefined;
        additionalAttributes?: Array<CustomAttributes$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BillingDetails> = z
        .object({
            id: z.string().optional(),
            customerId: z.string().optional(),
            fullName: z.string().optional(),
            email: z.string().optional(),
            phoneNumber: z.string().optional(),
            address: Addresses$?.outboundSchema.optional(),
            companyName: z.string().optional(),
            vatId: z.string().optional(),
            paymentTerms: BillingDetailsPaymentTerms$.optional(),
            note: z.string().optional(),
            defaultPaymentMethod: PaymentMethods$?.outboundSchema.optional(),
            createdAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            updatedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            active: z.boolean().optional(),
            isDeleted: z.boolean().optional(),
            currency: BillingDetailsCurrency$.optional(),
            language: z.string().optional(),
            additionalAttributes: z.array(CustomAttributes$?.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.customerId === undefined ? null : { customerId: v.customerId }),
                ...(v.fullName === undefined ? null : { fullName: v.fullName }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.phoneNumber === undefined ? null : { phoneNumber: v.phoneNumber }),
                ...(v.address === undefined ? null : { address: v.address }),
                ...(v.companyName === undefined ? null : { companyName: v.companyName }),
                ...(v.vatId === undefined ? null : { vatId: v.vatId }),
                ...(v.paymentTerms === undefined ? null : { paymentTerms: v.paymentTerms }),
                ...(v.note === undefined ? null : { note: v.note }),
                ...(v.defaultPaymentMethod === undefined
                    ? null
                    : { defaultPaymentMethod: v.defaultPaymentMethod }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.isDeleted === undefined ? null : { isDeleted: v.isDeleted }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.language === undefined ? null : { language: v.language }),
                ...(v.additionalAttributes === undefined
                    ? null
                    : { additionalAttributes: v.additionalAttributes }),
            };
        });
}
