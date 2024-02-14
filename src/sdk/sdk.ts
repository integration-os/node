/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKOptions, serverURLFromOptions } from "../lib/config";
import { HTTPClient } from "../lib/http";
import { ClientSDK } from "../lib/sdks";
import { Accounts } from "./accounts";
import { BalanceSheets } from "./balancesheets";
import { Bills } from "./bills";
import { Candidates } from "./candidates";
import { Chats } from "./chats";
import { Companies } from "./companies";
import { Contacts } from "./contacts";
import { Customers } from "./customers";
import { Expenses } from "./expenses";
import { IncomeStatements } from "./incomestatements";
import { Invoices } from "./invoices";
import { Jobs } from "./jobs";
import { Leads } from "./leads";
import { Messages } from "./messages";
import { Notes } from "./notes";
import { Opportunities } from "./opportunities";
import { Orders } from "./orders";
import { Payments } from "./payments";
import { Products } from "./products";
import { Tasks } from "./tasks";
import { Tickets } from "./tickets";
import { Users } from "./users";

export class IntegrationOS extends ClientSDK {
    private readonly options$: SDKOptions;

    constructor(secret: string, options: SDKOptions = {}) {
        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options) as URL,
        });

        this.options$ = { secret, ...options };
        void this.options$;
    }

    private _customers?: Customers;
    get customers() {
        return (this._customers ??= new Customers(this.options$));
    }

    private _orders?: Orders;
    get orders() {
        return (this._orders ??= new Orders(this.options$));
    }

    private _opportunities?: Opportunities;
    get opportunities() {
        return (this._opportunities ??= new Opportunities(this.options$));
    }

    private _notes?: Notes;
    get notes() {
        return (this._notes ??= new Notes(this.options$));
    }

    private _products?: Products;
    get products() {
        return (this._products ??= new Products(this.options$));
    }

    private _users?: Users;
    get users() {
        return (this._users ??= new Users(this.options$));
    }

    private _jobs?: Jobs;
    get jobs() {
        return (this._jobs ??= new Jobs(this.options$));
    }

    private _leads?: Leads;
    get leads() {
        return (this._leads ??= new Leads(this.options$));
    }

    private _contacts?: Contacts;
    get contacts() {
        return (this._contacts ??= new Contacts(this.options$));
    }

    private _incomeStatements?: IncomeStatements;
    get incomeStatements() {
        return (this._incomeStatements ??= new IncomeStatements(this.options$));
    }

    private _tickets?: Tickets;
    get tickets() {
        return (this._tickets ??= new Tickets(this.options$));
    }

    private _candidates?: Candidates;
    get candidates() {
        return (this._candidates ??= new Candidates(this.options$));
    }

    private _balanceSheets?: BalanceSheets;
    get balanceSheets() {
        return (this._balanceSheets ??= new BalanceSheets(this.options$));
    }

    private _invoices?: Invoices;
    get invoices() {
        return (this._invoices ??= new Invoices(this.options$));
    }

    private _tasks?: Tasks;
    get tasks() {
        return (this._tasks ??= new Tasks(this.options$));
    }

    private _bills?: Bills;
    get bills() {
        return (this._bills ??= new Bills(this.options$));
    }

    private _companies?: Companies;
    get companies() {
        return (this._companies ??= new Companies(this.options$));
    }

    private _payments?: Payments;
    get payments() {
        return (this._payments ??= new Payments(this.options$));
    }

    private _messages?: Messages;
    get messages() {
        return (this._messages ??= new Messages(this.options$));
    }

    private _chats?: Chats;
    get chats() {
        return (this._chats ??= new Chats(this.options$));
    }

    private _accounts?: Accounts;
    get accounts() {
        return (this._accounts ??= new Accounts(this.options$));
    }

    private _expenses?: Expenses;
    get expenses() {
        return (this._expenses ??= new Expenses(this.options$));
    }
}
