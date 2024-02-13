/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Customers, Customers$ } from "./customers";
import { Transactions, Transactions$ } from "./transactions";
import { z } from "zod";

export enum AccountType {
    Asset = "asset",
    AssetBank = "asset::bank",
    AssetCashOnHand = "asset::cash-on-hand",
    AssetChecking = "asset::checking",
    AssetMoneyMarket = "asset::money-market",
    AssetRentsHeldInTrust = "asset::rents-held-in-trust",
    AssetSavings = "asset::savings",
    AssetTrustAccounts = "asset::trust-accounts",
    AssetCashAndCashEquivalents = "asset::cash-and-cash-equivalents",
    AssetOtherEarMarkedBankAccounts = "asset::other-ear-marked-bank-accounts",
    AssetOtherCurrentAsset = "asset::other-current-asset",
    AssetAllowanceForBadDebts = "asset::allowance-for-bad-debts",
    AssetDevelopmentCosts = "asset::development-costs",
    AssetEmployeeCashAdvances = "asset::employee-cash-advances",
    AssetOtherCurrentAssets = "asset::other-current-assets",
    AssetInventory = "asset::inventory",
    AssetInvestmentMortgageRealEstateLoans = "asset::investment-mortgage-real-estate-loans",
    AssetInvestmentOther = "asset::investment-other",
    AssetInvestmentTaxExemptSecurities = "asset::investment-tax-exempt-securities",
    AssetInvestmentUsGovernmentObligations = "asset::investment-us-government-obligations",
    AssetLoansToOfficers = "asset::loans-to-officers",
    AssetLoansToOthers = "asset::loans-to-others",
    AssetLoansToStockholders = "asset::loans-to-stockholders",
    AssetPrepaidExpenses = "asset::prepaid-expenses",
    AssetRetainage = "asset::retainage",
    AssetUndepositedFunds = "asset::undeposited-funds",
    AssetAssetsAvailableForSale = "asset::assets-available-for-sale",
    AssetBalWithGovtAuthorities = "asset::bal-with-govt-authorities",
    AssetCalledUpShareCapitalNotPaid = "asset::called-up-share-capital-not-paid",
    AssetExpenditureAuthorisationsAndLettersOfCredit = "asset::expenditure-authorisations-and-letters-of-credit",
    AssetGlobalTaxDeferred = "asset::global-tax-deferred",
    AssetGlobalTaxRefund = "asset::global-tax-refund",
    AssetInternalTransfers = "asset::internal-transfers",
    AssetOtherConsumables = "asset::other-consumables",
    AssetProvisionsCurrentAssets = "asset::provisions-current-assets",
    AssetShortTermInvestmentsInRelatedParties = "asset::short-term-investments-in-related-parties",
    AssetShortTermLoansAndAdvancesToRelatedParties = "asset::short-term-loans-and-advances-to-related-parties",
    AssetTradeAndOtherReceivables = "asset::trade-and-other-receivables",
    AssetFixedAsset = "asset::fixed-asset",
    AssetAccumulatedDepletion = "asset::accumulated-depletion",
    AssetAccumulatedDepreciation = "asset::accumulated-depreciation",
    AssetDepletableAssets = "asset::depletable-assets",
    AssetFixedAssetComputers = "asset::fixed-asset-computers",
    AssetFixedAssetCopiers = "asset::fixed-asset-copiers",
    AssetFixedAssetFurniture = "asset::fixed-asset-furniture",
    AssetFixedAssetPhone = "asset::fixed-asset-phone",
    AssetFixedAssetPhotoVideo = "asset::fixed-asset-photo-video",
    AssetFixedAssetSoftware = "asset::fixed-asset-software",
    AssetFixedAssetOtherToolsEquipment = "asset::fixed-asset-other-tools-equipment",
    AssetFurnitureAndFixtures = "asset::furniture-and-fixtures",
    AssetLand = "asset::land",
    AssetLeaseholdImprovements = "asset::leasehold-improvements",
    AssetOtherFixedAssets = "asset::other-fixed-assets",
    AssetAccumulatedAmortization = "asset::accumulated-amortization",
    AssetBuildings = "asset::buildings",
    AssetIntangibleAssets = "asset::intangible-assets",
    AssetMachineryAndEquipment = "asset::machinery-and-equipment",
    AssetVehicles = "asset::vehicles",
    AssetAssetsInCourseOfConstruction = "asset::assets-in-course-of-construction",
    AssetCapitalWip = "asset::capital-wip",
    AssetCumulativeDepreciationOnIntangibleAssets = "asset::cumulative-depreciation-on-intangible-assets",
    AssetIntangibleAssetsUnderDevelopment = "asset::intangible-assets-under-development",
    AssetLandAsset = "asset::land-asset",
    AssetNonCurrentAssets = "asset::non-current-assets",
    AssetParticipatingInterests = "asset::participating-interests",
    AssetProvisionsFixedAssets = "asset::provisions-fixed-assets",
    AssetOtherAsset = "asset::other-asset",
    AssetLeaseBuyout = "asset::lease-buyout",
    AssetOtherLongTermAssets = "asset::other-long-term-assets",
    AssetSecurityDeposits = "asset::security-deposits",
    AssetAccumulatedAmortizationOfOtherAssets = "asset::accumulated-amortization-of-other-assets",
    AssetGoodwill = "asset::goodwill",
    AssetLicenses = "asset::licenses",
    AssetOrganizationalCosts = "asset::organizational-costs",
    AssetAssetsHeldForSale = "asset::assets-held-for-sale",
    AssetAvailableForSaleFinancialAssets = "asset::available-for-sale-financial-assets",
    AssetDeferredTax = "asset::deferred-tax",
    AssetInvestments = "asset::investments",
    AssetLongTermInvestments = "asset::long-term-investments",
    AssetLongTermLoansAndAdvancesToRelatedParties = "asset::long-term-loans-and-advances-to-related-parties",
    AssetOtherIntangibleAssets = "asset::other-intangible-assets",
    AssetOtherLongTermInvestments = "asset::other-long-term-investments",
    AssetOtherLongTermLoansAndAdvances = "asset::other-long-term-loans-and-advances",
    AssetPrepaymentsAndAccruedIncome = "asset::prepayments-and-accrued-income",
    AssetProvisionsNonCurrentAssets = "asset::provisions-non-current-assets",
    AccountsReceivable = "accounts-receivable",
    Equity = "equity",
    EquityOpeningBalanceEquity = "equity::opening-balance-equity",
    EquityPartnersEquity = "equity::partners-equity",
    EquityRetainedEarnings = "equity::retained-earnings",
    EquityAccumulatedAdjustment = "equity::accumulated-adjustment",
    EquityOwnersEquity = "equity::owners-equity",
    EquityPaidInCapitalOrSurplus = "equity::paid-in-capital-or-surplus",
    EquityPartnerContributions = "equity::partner-contributions",
    EquityPartnerDistributions = "equity::partner-distributions",
    EquityPreferredStock = "equity::preferred-stock",
    EquityCommonStock = "equity::common-stock",
    EquityTreasuryStock = "equity::treasury-stock",
    EquityEstimatedTaxes = "equity::estimated-taxes",
    EquityHealthcare = "equity::healthcare",
    EquityPersonalIncome = "equity::personal-income",
    EquityPersonalExpense = "equity::personal-expense",
    EquityAccumulatedOtherComprehensiveIncome = "equity::accumulated-other-comprehensive-income",
    EquityCalledUpShareCapital = "equity::called-up-share-capital",
    EquityCapitalReserves = "equity::capital-reserves",
    EquityDividendDisbursed = "equity::dividend-disbursed",
    EquityEquityInEarningsOfSubsidiuaries = "equity::equity-in-earnings-of-subsidiuaries",
    EquityInvestmentGrants = "equity::investment-grants",
    EquityMoneyReceivedAgainstShareWarrants = "equity::money-received-against-share-warrants",
    EquityOtherFreeReserves = "equity::other-free-reserves",
    EquityShareApplicationMoneyPendingAllotment = "equity::share-application-money-pending-allotment",
    EquityShareCapital = "equity::share-capital",
    EquityFunds = "equity::funds",
    Expense = "expense",
    ExpenseAdvertisingPromotional = "expense::advertising-promotional",
    ExpenseBadDebts = "expense::bad-debts",
    ExpenseBankCharges = "expense::bank-charges",
    ExpenseCharitableContributions = "expense::charitable-contributions",
    ExpenseCommissionsAndFees = "expense::commissions-and-fees",
    ExpenseEntertainment = "expense::entertainment",
    ExpenseEntertainmentMeals = "expense::entertainment-meals",
    ExpenseEquipmentRental = "expense::equipment-rental",
    ExpenseFinanceCosts = "expense::finance-costs",
    ExpenseGlobalTaxExpense = "expense::global-tax-expense",
    ExpenseInsurance = "expense::insurance",
    ExpenseInterestPaid = "expense::interest-paid",
    ExpenseLegalProfessionalFees = "expense::legal-professional-fees",
    ExpenseOfficeExpenses = "expense::office-expenses",
    ExpenseOfficeGeneralAdministrativeExpenses = "expense::office-general-administrative-expenses",
    ExpenseOtherBusinessExpenses = "expense::other-business-expenses",
    ExpenseOtherMiscellaneousServiceCost = "expense::other-miscellaneous-service-cost",
    ExpensePromotionalMeals = "expense::promotional-meals",
    ExpenseRentOrLeaseOfBuildings = "expense::rent-or-lease-of-buildings",
    ExpenseRepairMaintenance = "expense::repair-maintenance",
    ExpenseShippingFreightDelivery = "expense::shipping-freight-delivery",
    ExpenseSuppliesMaterials = "expense::supplies-materials",
    ExpenseTravel = "expense::travel",
    ExpenseTravelMeals = "expense::travel-meals",
    ExpenseUtilities = "expense::utilities",
    ExpenseAuto = "expense::auto",
    ExpenseCostOfLabor = "expense::cost-of-labor",
    ExpenseDuesSubscriptions = "expense::dues-subscriptions",
    ExpensePayrollExpenses = "expense::payroll-expenses",
    ExpenseTaxesPaid = "expense::taxes-paid",
    ExpenseUnappliedCashBillPaymentExpense = "expense::unapplied-cash-bill-payment-expense",
    ExpenseAmortizationExpense = "expense::amortization-expense",
    ExpenseAppropriationsToDepreciation = "expense::appropriations-to-depreciation",
    ExpenseBorrowingCost = "expense::borrowing-cost",
    ExpenseDistributionCosts = "expense::distribution-costs",
    ExpenseExternalServices = "expense::external-services",
    ExpenseExtraordinaryCharges = "expense::extraordinary-charges",
    ExpenseIncomeTaxExpense = "expense::income-tax-expense",
    ExpenseLossOnDiscontinuedOperationsNetOfTax = "expense::loss-on-discontinued-operations-net-of-tax",
    ExpenseManagementCompensation = "expense::management-compensation",
    ExpenseOtherCurrentOperatingCharges = "expense::other-current-operating-charges",
    ExpenseOtherExternalServices = "expense::other-external-services",
    ExpenseOtherRentalCosts = "expense::other-rental-costs",
    ExpenseOtherSellingExpenses = "expense::other-selling-expenses",
    ExpenseProjectStudiesSurveysAssessments = "expense::project-studies-surveys-assessments",
    ExpensePurchasesRebates = "expense::purchases-rebates",
    ExpenseShippingAndDeliveryExpense = "expense::shipping-and-delivery-expense",
    ExpenseStaffCosts = "expense::staff-costs",
    ExpenseSundry = "expense::sundry",
    ExpenseTravelExpensesGeneralAndAdminExpenses = "expense::travel-expenses-general-and-admin-expenses",
    ExpenseTravelExpensesSellingExpense = "expense::travel-expenses-selling-expense",
    OtherExpense = "other-expense",
    OtherExpenseDepreciation = "other-expense::depreciation",
    OtherExpenseExchangeGainOrLoss = "other-expense::exchange-gain-or-loss",
    OtherExpenseOtherMiscellaneousExpense = "other-expense::other-miscellaneous-expense",
    OtherExpensePenaltiesSettlements = "other-expense::penalties-settlements",
    OtherExpenseAmortization = "other-expense::amortization",
    OtherExpenseGasAndFuel = "other-expense::gas-and-fuel",
    OtherExpenseHomeOffice = "other-expense::home-office",
    OtherExpenseHomeOwnerRentalInsurance = "other-expense::home-owner-rental-insurance",
    OtherExpenseOtherHomeOfficeExpenses = "other-expense::other-home-office-expenses",
    OtherExpenseMortgageInterest = "other-expense::mortgage-interest",
    OtherExpenseRentAndLease = "other-expense::rent-and-lease",
    OtherExpenseRepairsAndMaintenance = "other-expense::repairs-and-maintenance",
    OtherExpenseParkingAndTolls = "other-expense::parking-and-tolls",
    OtherExpenseVehicle = "other-expense::vehicle",
    OtherExpenseVehicleInsurance = "other-expense::vehicle-insurance",
    OtherExpenseVehicleLease = "other-expense::vehicle-lease",
    OtherExpenseVehicleLoanInterest = "other-expense::vehicle-loan-interest",
    OtherExpenseVehicleLoan = "other-expense::vehicle-loan",
    OtherExpenseVehicleRegistration = "other-expense::vehicle-registration",
    OtherExpenseVehicleRepairs = "other-expense::vehicle-repairs",
    OtherExpenseOtherVehicleExpenses = "other-expense::other-vehicle-expenses",
    OtherExpenseUtilities = "other-expense::utilities",
    OtherExpenseWashAndRoadServices = "other-expense::wash-and-road-services",
    OtherExpenseDeferredTaxExpense = "other-expense::deferred-tax-expense",
    OtherExpenseDepletion = "other-expense::depletion",
    OtherExpenseExceptionalItems = "other-expense::exceptional-items",
    OtherExpenseExtraordinaryItems = "other-expense::extraordinary-items",
    OtherExpenseIncomeTaxOtherExpense = "other-expense::income-tax-other-expense",
    OtherExpenseMatCredit = "other-expense::mat-credit",
    OtherExpensePriorPeriodItems = "other-expense::prior-period-items",
    OtherExpenseTaxRoundoffGainOrLoss = "other-expense::tax-roundoff-gain-or-loss",
    CostOfGoodsSold = "cost-of-goods-sold",
    CostOfGoodsSoldEquipmentRentalCos = "cost-of-goods-sold::equipment-rental-cos",
    CostOfGoodsSoldOtherCostsOfServiceCos = "cost-of-goods-sold::other-costs-of-service-cos",
    CostOfGoodsSoldShippingFreightDeliveryCos = "cost-of-goods-sold::shipping-freight-delivery-cos",
    CostOfGoodsSoldSuppliesMaterialsCogs = "cost-of-goods-sold::supplies-materials-cogs",
    CostOfGoodsSoldCostOfLaborCos = "cost-of-goods-sold::cost-of-labor-cos",
    CostOfGoodsSoldCostOfSales = "cost-of-goods-sold::cost-of-sales",
    CostOfGoodsSoldFreightAndDeliveryCost = "cost-of-goods-sold::freight-and-delivery-cost",
    LiabilityAccountsPayable = "liability::accounts-payable",
    LiabilityOutstandingDuesMicroSmallEnterprise = "liability::outstanding-dues-micro-small-enterprise",
    LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = "liability::outstanding-dues-other-than-micro-small-enterprise",
    LiabilityCreditCard = "liability::credit-card",
    LiabilityLongTermLiability = "liability::long-term-liability",
    LiabilityNotesPayable = "liability::notes-payable",
    LiabilityOtherLongTermLiabilities = "liability::other-long-term-liabilities",
    LiabilityShareholderNotesPayable = "liability::shareholder-notes-payable",
    LiabilityAccrualsAndDeferredIncome = "liability::accruals-and-deferred-income",
    LiabilityAccruedLongTermLiabilities = "liability::accrued-long-term-liabilities",
    LiabilityAccruedVacationPayable = "liability::accrued-vacation-payable",
    LiabilityBankLoans = "liability::bank-loans",
    LiabilityDebtsRelatedToParticipatingInterests = "liability::debts-related-to-participating-interests",
    LiabilityDeferredTaxLiabilities = "liability::deferred-tax-liabilities",
    LiabilityGovernmentAndOtherPublicAuthorities = "liability::government-and-other-public-authorities",
    LiabilityGroupAndAssociates = "liability::group-and-associates",
    LiabilityLiabilitiesRelatedToAssetsHeldForSale = "liability::liabilities-related-to-assets-held-for-sale",
    LiabilityLongTermBorrowings = "liability::long-term-borrowings",
    LiabilityLongTermDebit = "liability::long-term-debit",
    LiabilityLongTermEmployeeBenefitObligations = "liability::long-term-employee-benefit-obligations",
    LiabilityObligationsUnderFinanceLeases = "liability::obligations-under-finance-leases",
    LiabilityOtherLongTermProvisions = "liability::other-long-term-provisions",
    LiabilityProvisionForLiabilities = "liability::provision-for-liabilities",
    LiabilityProvisionsNonCurrentLiabilities = "liability::provisions-non-current-liabilities",
    LiabilityStaffAndRelatedLongTermLiabilityAccounts = "liability::staff-and-related-long-term-liability-accounts",
    OtherCurrentLiability = "other-current-liability",
    OtherCurrentLiabilityDirectDepositPayable = "other-current-liability::direct-deposit-payable",
    OtherCurrentLiabilityLineOfCredit = "other-current-liability::line-of-credit",
    OtherCurrentLiabilityLoanPayable = "other-current-liability::loan-payable",
    OtherCurrentLiabilityGlobalTaxPayable = "other-current-liability::global-tax-payable",
    OtherCurrentLiabilityGlobalTaxSuspense = "other-current-liability::global-tax-suspense",
    OtherCurrentLiabilityOtherCurrentLiabilities = "other-current-liability::other-current-liabilities",
    OtherCurrentLiabilityPayrollClearing = "other-current-liability::payroll-clearing",
    OtherCurrentLiabilityPayrollTaxPayable = "other-current-liability::payroll-tax-payable",
    OtherCurrentLiabilityPrepaidExpensesPayable = "other-current-liability::prepaid-expenses-payable",
    OtherCurrentLiabilityRentsInTrustLiability = "other-current-liability::rents-in-trust-liability",
    OtherCurrentLiabilityTrustAccountsLiabilities = "other-current-liability::trust-accounts-liabilities",
    OtherCurrentLiabilityFederalIncomeTaxPayable = "other-current-liability::federal-income-tax-payable",
    OtherCurrentLiabilityInsurancePayable = "other-current-liability::insurance-payable",
    OtherCurrentLiabilitySalesTaxPayable = "other-current-liability::sales-tax-payable",
    OtherCurrentLiabilityStateLocalIncomeTaxPayable = "other-current-liability::state-local-income-tax-payable",
    OtherCurrentLiabilityAccruedLiabilities = "other-current-liability::accrued-liabilities",
    OtherCurrentLiabilityCurrentLiabilities = "other-current-liability::current-liabilities",
    OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = "other-current-liability::current-portion-employee-benefits-obligations",
    OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = "other-current-liability::current-portion-of-obligations-under-finance-leases",
    OtherCurrentLiabilityCurrentTaxLiability = "other-current-liability::current-tax-liability",
    OtherCurrentLiabilityDividendsPayable = "other-current-liability::dividends-payable",
    OtherCurrentLiabilityDutiesAndTaxes = "other-current-liability::duties-and-taxes",
    OtherCurrentLiabilityInterestPayables = "other-current-liability::interest-payables",
    OtherCurrentLiabilityProvisionForWarrantyObligations = "other-current-liability::provision-for-warranty-obligations",
    OtherCurrentLiabilityProvisionsCurrentLiabilities = "other-current-liability::provisions-current-liabilities",
    OtherCurrentLiabilityShortTermBorrowings = "other-current-liability::short-term-borrowings",
    OtherCurrentLiabilitySocialSecurityAgencies = "other-current-liability::social-security-agencies",
    OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = "other-current-liability::staff-and-related-liability-accounts",
    OtherCurrentLiabilitySundryDebtorsAndCreditors = "other-current-liability::sundry-debtors-and-creditors",
    OtherCurrentLiabilityTradeAndOtherPayables = "other-current-liability::trade-and-other-payables",
    RevenueIncome = "revenue::income",
    RevenueNonProfitIncome = "revenue::non-profit-income",
    RevenueOtherPrimaryIncome = "revenue::other-primary-income",
    RevenueSalesOfProductIncome = "revenue::sales-of-product-income",
    RevenueServiceFeeIncome = "revenue::service-fee-income",
    RevenueDiscountsRefundsGiven = "revenue::discounts-refunds-given",
    RevenueUnappliedCashPaymentIncome = "revenue::unapplied-cash-payment-income",
    RevenueCashReceiptIncome = "revenue::cash-receipt-income",
    RevenueOperatingGrants = "revenue::operating-grants",
    RevenueOtherCurrentOperatingIncome = "revenue::other-current-operating-income",
    RevenueOwnWorkCapitalized = "revenue::own-work-capitalized",
    RevenueRevenueGeneral = "revenue::revenue-general",
    RevenueSalesRetail = "revenue::sales-retail",
    RevenueSalesWholesale = "revenue::sales-wholesale",
    RevenueSavingsByTaxScheme = "revenue::savings-by-tax-scheme",
    OtherIncome = "other-income",
    OtherIncomeDividendIncome = "other-income::dividend-income",
    OtherIncomeInterestEarned = "other-income::interest-earned",
    OtherIncomeOtherInvestmentIncome = "other-income::other-investment-income",
    OtherIncomeOtherMiscellaneousIncome = "other-income::other-miscellaneous-income",
    OtherIncomeTaxExemptInterest = "other-income::tax-exempt-interest",
    OtherIncomeGainLossOnSaleOfFixedAssets = "other-income::gain-loss-on-sale-of-fixed-assets",
    OtherIncomeGainLossOnSaleOfInvestments = "other-income::gain-loss-on-sale-of-investments",
    OtherIncomeLossOnDisposalOfAssets = "other-income::loss-on-disposal-of-assets",
    OtherIncomeOtherOperatingIncome = "other-income::other-operating-income",
    OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = "other-income::unrealised-loss-on-securities-net-of-tax",
}

export enum Currency {
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

export enum AccountsStatus {
    Active = "active",
    Closed = "closed",
    Frozen = "frozen",
    Suspended = "suspended",
}

export type Accounts = {
    id?: string | undefined;
    name?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
    accountNumber?: string | undefined;
    accountType?: AccountType | undefined;
    balance?: number | undefined;
    currency?: Currency | undefined;
    owner?: Customers | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    closedAt?: Date | undefined;
    status?: AccountsStatus | undefined;
    transactions?: Array<Transactions> | undefined;
    branch?: string | undefined;
    notes?: string | undefined;
    interestRate?: number | undefined;
    overdraftLimit?: number | undefined;
    overdraftProtection?: boolean | undefined;
    active?: boolean | undefined;
    deleted?: boolean | undefined;
};

/** @internal */
export const AccountType$ = z.nativeEnum(AccountType);

/** @internal */
export const Currency$ = z.nativeEnum(Currency);

/** @internal */
export const AccountsStatus$ = z.nativeEnum(AccountsStatus);

/** @internal */
export namespace Accounts$ {
    export type Inbound = {
        id?: string | undefined;
        name?: string | undefined;
        title?: string | undefined;
        description?: string | undefined;
        accountNumber?: string | undefined;
        accountType?: AccountType | undefined;
        balance?: number | undefined;
        currency?: Currency | undefined;
        owner?: Customers$.Inbound | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        closedAt?: string | undefined;
        status?: AccountsStatus | undefined;
        transactions?: Array<Transactions$.Inbound> | undefined;
        branch?: string | undefined;
        notes?: string | undefined;
        interestRate?: number | undefined;
        overdraftLimit?: number | undefined;
        overdraftProtection?: boolean | undefined;
        active?: boolean | undefined;
        deleted?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<Accounts, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            name: z.string().optional(),
            title: z.string().optional(),
            description: z.string().optional(),
            accountNumber: z.string().optional(),
            accountType: AccountType$.optional(),
            balance: z.number().optional(),
            currency: Currency$.optional(),
            owner: Customers$?.inboundSchema.optional(),
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
            closedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            status: AccountsStatus$.optional(),
            transactions: z.array(Transactions$?.inboundSchema).optional(),
            branch: z.string().optional(),
            notes: z.string().optional(),
            interestRate: z.number().optional(),
            overdraftLimit: z.number().optional(),
            overdraftProtection: z.boolean().optional(),
            active: z.boolean().optional(),
            deleted: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.accountNumber === undefined ? null : { accountNumber: v.accountNumber }),
                ...(v.accountType === undefined ? null : { accountType: v.accountType }),
                ...(v.balance === undefined ? null : { balance: v.balance }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.owner === undefined ? null : { owner: v.owner }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.closedAt === undefined ? null : { closedAt: v.closedAt }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.transactions === undefined ? null : { transactions: v.transactions }),
                ...(v.branch === undefined ? null : { branch: v.branch }),
                ...(v.notes === undefined ? null : { notes: v.notes }),
                ...(v.interestRate === undefined ? null : { interestRate: v.interestRate }),
                ...(v.overdraftLimit === undefined ? null : { overdraftLimit: v.overdraftLimit }),
                ...(v.overdraftProtection === undefined
                    ? null
                    : { overdraftProtection: v.overdraftProtection }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        name?: string | undefined;
        title?: string | undefined;
        description?: string | undefined;
        accountNumber?: string | undefined;
        accountType?: AccountType | undefined;
        balance?: number | undefined;
        currency?: Currency | undefined;
        owner?: Customers$.Outbound | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        closedAt?: string | undefined;
        status?: AccountsStatus | undefined;
        transactions?: Array<Transactions$.Outbound> | undefined;
        branch?: string | undefined;
        notes?: string | undefined;
        interestRate?: number | undefined;
        overdraftLimit?: number | undefined;
        overdraftProtection?: boolean | undefined;
        active?: boolean | undefined;
        deleted?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Accounts> = z
        .object({
            id: z.string().optional(),
            name: z.string().optional(),
            title: z.string().optional(),
            description: z.string().optional(),
            accountNumber: z.string().optional(),
            accountType: AccountType$.optional(),
            balance: z.number().optional(),
            currency: Currency$.optional(),
            owner: Customers$?.outboundSchema.optional(),
            createdAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            updatedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            closedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            status: AccountsStatus$.optional(),
            transactions: z.array(Transactions$?.outboundSchema).optional(),
            branch: z.string().optional(),
            notes: z.string().optional(),
            interestRate: z.number().optional(),
            overdraftLimit: z.number().optional(),
            overdraftProtection: z.boolean().optional(),
            active: z.boolean().optional(),
            deleted: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.accountNumber === undefined ? null : { accountNumber: v.accountNumber }),
                ...(v.accountType === undefined ? null : { accountType: v.accountType }),
                ...(v.balance === undefined ? null : { balance: v.balance }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.owner === undefined ? null : { owner: v.owner }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.closedAt === undefined ? null : { closedAt: v.closedAt }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.transactions === undefined ? null : { transactions: v.transactions }),
                ...(v.branch === undefined ? null : { branch: v.branch }),
                ...(v.notes === undefined ? null : { notes: v.notes }),
                ...(v.interestRate === undefined ? null : { interestRate: v.interestRate }),
                ...(v.overdraftLimit === undefined ? null : { overdraftLimit: v.overdraftLimit }),
                ...(v.overdraftProtection === undefined
                    ? null
                    : { overdraftProtection: v.overdraftProtection }),
                ...(v.active === undefined ? null : { active: v.active }),
                ...(v.deleted === undefined ? null : { deleted: v.deleted }),
            };
        });
}
