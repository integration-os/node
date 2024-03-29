/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Currency, Currency$ } from "./currency";
import { IncomeTaxExpenseDetails, IncomeTaxExpenseDetails$ } from "./incometaxexpensedetails";
import { KeyValues, KeyValues$ } from "./keyvalues";
import { OperatingExpensesDetails, OperatingExpensesDetails$ } from "./operatingexpensesdetails";
import { RevenueDetails, RevenueDetails$ } from "./revenuedetails";
import { ShareholderEquityDetails, ShareholderEquityDetails$ } from "./shareholderequitydetails";
import { z } from "zod";

export type IncomeStatements = {
    id?: string | undefined;
    period?: string | undefined;
    currency?: Currency | undefined;
    exchangeRate?: number | undefined;
    revenue?: RevenueDetails | undefined;
    costOfGoodsSold?: number | undefined;
    grossProfit?: number | undefined;
    operatingExpenses?: OperatingExpensesDetails | undefined;
    operatingIncome?: number | undefined;
    interestExpense?: number | undefined;
    depreciationAndAmortization?: number | undefined;
    ebitda?: number | undefined;
    incomeBeforeTax?: number | undefined;
    incomeTaxExpense?: IncomeTaxExpenseDetails | undefined;
    netIncome?: number | undefined;
    shareholderEquity?: ShareholderEquityDetails | undefined;
    profitMargins?: number | undefined;
    accountSummary?: Array<KeyValues> | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    modifyToken?: string | undefined;
};

/** @internal */
export namespace IncomeStatements$ {
    export type Inbound = {
        id?: string | undefined;
        period?: string | undefined;
        currency?: Currency | undefined;
        exchangeRate?: number | undefined;
        revenue?: RevenueDetails$.Inbound | undefined;
        costOfGoodsSold?: number | undefined;
        grossProfit?: number | undefined;
        operatingExpenses?: OperatingExpensesDetails$.Inbound | undefined;
        operatingIncome?: number | undefined;
        interestExpense?: number | undefined;
        depreciationAndAmortization?: number | undefined;
        ebitda?: number | undefined;
        incomeBeforeTax?: number | undefined;
        incomeTaxExpense?: IncomeTaxExpenseDetails$.Inbound | undefined;
        netIncome?: number | undefined;
        shareholderEquity?: ShareholderEquityDetails$.Inbound | undefined;
        profitMargins?: number | undefined;
        accountSummary?: Array<KeyValues$.Inbound> | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        modifyToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<IncomeStatements, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            period: z.string().optional(),
            currency: Currency$.optional(),
            exchangeRate: z.number().optional(),
            revenue: RevenueDetails$?.inboundSchema.optional(),
            costOfGoodsSold: z.number().optional(),
            grossProfit: z.number().optional(),
            operatingExpenses: OperatingExpensesDetails$?.inboundSchema.optional(),
            operatingIncome: z.number().optional(),
            interestExpense: z.number().optional(),
            depreciationAndAmortization: z.number().optional(),
            ebitda: z.number().optional(),
            incomeBeforeTax: z.number().optional(),
            incomeTaxExpense: IncomeTaxExpenseDetails$?.inboundSchema.optional(),
            netIncome: z.number().optional(),
            shareholderEquity: ShareholderEquityDetails$?.inboundSchema.optional(),
            profitMargins: z.number().optional(),
            accountSummary: z.array(KeyValues$?.inboundSchema).optional(),
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
                ...(v.period === undefined ? null : { period: v.period }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.exchangeRate === undefined ? null : { exchangeRate: v.exchangeRate }),
                ...(v.revenue === undefined ? null : { revenue: v.revenue }),
                ...(v.costOfGoodsSold === undefined
                    ? null
                    : { costOfGoodsSold: v.costOfGoodsSold }),
                ...(v.grossProfit === undefined ? null : { grossProfit: v.grossProfit }),
                ...(v.operatingExpenses === undefined
                    ? null
                    : { operatingExpenses: v.operatingExpenses }),
                ...(v.operatingIncome === undefined
                    ? null
                    : { operatingIncome: v.operatingIncome }),
                ...(v.interestExpense === undefined
                    ? null
                    : { interestExpense: v.interestExpense }),
                ...(v.depreciationAndAmortization === undefined
                    ? null
                    : { depreciationAndAmortization: v.depreciationAndAmortization }),
                ...(v.ebitda === undefined ? null : { ebitda: v.ebitda }),
                ...(v.incomeBeforeTax === undefined
                    ? null
                    : { incomeBeforeTax: v.incomeBeforeTax }),
                ...(v.incomeTaxExpense === undefined
                    ? null
                    : { incomeTaxExpense: v.incomeTaxExpense }),
                ...(v.netIncome === undefined ? null : { netIncome: v.netIncome }),
                ...(v.shareholderEquity === undefined
                    ? null
                    : { shareholderEquity: v.shareholderEquity }),
                ...(v.profitMargins === undefined ? null : { profitMargins: v.profitMargins }),
                ...(v.accountSummary === undefined ? null : { accountSummary: v.accountSummary }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        period?: string | undefined;
        currency?: Currency | undefined;
        exchangeRate?: number | undefined;
        revenue?: RevenueDetails$.Outbound | undefined;
        costOfGoodsSold?: number | undefined;
        grossProfit?: number | undefined;
        operatingExpenses?: OperatingExpensesDetails$.Outbound | undefined;
        operatingIncome?: number | undefined;
        interestExpense?: number | undefined;
        depreciationAndAmortization?: number | undefined;
        ebitda?: number | undefined;
        incomeBeforeTax?: number | undefined;
        incomeTaxExpense?: IncomeTaxExpenseDetails$.Outbound | undefined;
        netIncome?: number | undefined;
        shareholderEquity?: ShareholderEquityDetails$.Outbound | undefined;
        profitMargins?: number | undefined;
        accountSummary?: Array<KeyValues$.Outbound> | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        modifyToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IncomeStatements> = z
        .object({
            id: z.string().optional(),
            period: z.string().optional(),
            currency: Currency$.optional(),
            exchangeRate: z.number().optional(),
            revenue: RevenueDetails$?.outboundSchema.optional(),
            costOfGoodsSold: z.number().optional(),
            grossProfit: z.number().optional(),
            operatingExpenses: OperatingExpensesDetails$?.outboundSchema.optional(),
            operatingIncome: z.number().optional(),
            interestExpense: z.number().optional(),
            depreciationAndAmortization: z.number().optional(),
            ebitda: z.number().optional(),
            incomeBeforeTax: z.number().optional(),
            incomeTaxExpense: IncomeTaxExpenseDetails$?.outboundSchema.optional(),
            netIncome: z.number().optional(),
            shareholderEquity: ShareholderEquityDetails$?.outboundSchema.optional(),
            profitMargins: z.number().optional(),
            accountSummary: z.array(KeyValues$?.outboundSchema).optional(),
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
                ...(v.period === undefined ? null : { period: v.period }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.exchangeRate === undefined ? null : { exchangeRate: v.exchangeRate }),
                ...(v.revenue === undefined ? null : { revenue: v.revenue }),
                ...(v.costOfGoodsSold === undefined
                    ? null
                    : { costOfGoodsSold: v.costOfGoodsSold }),
                ...(v.grossProfit === undefined ? null : { grossProfit: v.grossProfit }),
                ...(v.operatingExpenses === undefined
                    ? null
                    : { operatingExpenses: v.operatingExpenses }),
                ...(v.operatingIncome === undefined
                    ? null
                    : { operatingIncome: v.operatingIncome }),
                ...(v.interestExpense === undefined
                    ? null
                    : { interestExpense: v.interestExpense }),
                ...(v.depreciationAndAmortization === undefined
                    ? null
                    : { depreciationAndAmortization: v.depreciationAndAmortization }),
                ...(v.ebitda === undefined ? null : { ebitda: v.ebitda }),
                ...(v.incomeBeforeTax === undefined
                    ? null
                    : { incomeBeforeTax: v.incomeBeforeTax }),
                ...(v.incomeTaxExpense === undefined
                    ? null
                    : { incomeTaxExpense: v.incomeTaxExpense }),
                ...(v.netIncome === undefined ? null : { netIncome: v.netIncome }),
                ...(v.shareholderEquity === undefined
                    ? null
                    : { shareholderEquity: v.shareholderEquity }),
                ...(v.profitMargins === undefined ? null : { profitMargins: v.profitMargins }),
                ...(v.accountSummary === undefined ? null : { accountSummary: v.accountSummary }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.modifyToken === undefined ? null : { modifyToken: v.modifyToken }),
            };
        });
}
