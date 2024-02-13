/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as shared from "../sdk/models/shared";
import { Account } from "./account";
import { Accounting } from "./accounting";
import { Apicall } from "./apicall";
import { Application } from "./application";
import { Applicationstatus } from "./applicationstatus";
import { Ats } from "./ats";
import { Auth } from "./auth";
import { Call } from "./call";
import { Candidate } from "./candidate";
import { Collection } from "./collection";
import { Commerce } from "./commerce";
import { Company } from "./company";
import { Connection } from "./connection";
import { Contact } from "./contact";
import { Crm } from "./crm";
import { Customer } from "./customer";
import { Deal } from "./deal";
import { Document } from "./document";
import { Employee } from "./employee";
import { Enrich } from "./enrich";
import { Event } from "./event";
import { File } from "./file";
import { Group } from "./group";
import { Hris } from "./hris";
import { Integration } from "./integration";
import { Interview } from "./interview";
import { Inventory } from "./inventory";
import { Invoice } from "./invoice";
import { Issue } from "./issue";
import { Item } from "./item";
import { Job } from "./job";
import { Lead } from "./lead";
import { List } from "./list";
import { Location } from "./location";
import { Login } from "./login";
import { Martech } from "./martech";
import { Member } from "./member";
import { Note } from "./note";
import { Organization } from "./organization";
import { Passthrough } from "./passthrough";
import { Payment } from "./payment";
import { Payout } from "./payout";
import { Person } from "./person";
import { Pipeline } from "./pipeline";
import { Refund } from "./refund";
import { Scorecard } from "./scorecard";
import { Storage } from "./storage";
import { Taxrate } from "./taxrate";
import { Ticket } from "./ticket";
import { Ticketing } from "./ticketing";
import { Transaction } from "./transaction";
import { Uc } from "./uc";
import { Unified } from "./unified";
import { Webhook } from "./webhook";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * North American data region
     */
    "https://api.unified.to",
    /**
     * European data region
     */
    "https://api-eu.unified.to",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security | (() => Promise<shared.Security>);

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0";
    sdkVersion = "0.14.4";
    genVersion = "2.253.0";
    userAgent = "speakeasy-sdk/typescript 0.14.4 2.253.0 1.0 unified-typescript-sdk";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Unified.to API: One API to Rule Them All
 */
export class UnifiedTo {
    public accounting: Accounting;
    public account: Account;
    public contact: Contact;
    public invoice: Invoice;
    public organization: Organization;
    public payment: Payment;
    public payout: Payout;
    public refund: Refund;
    public taxrate: Taxrate;
    public transaction: Transaction;
    public ats: Ats;
    public application: Application;
    public applicationstatus: Applicationstatus;
    public candidate: Candidate;
    public company: Company;
    public document: Document;
    public interview: Interview;
    public job: Job;
    public scorecard: Scorecard;
    public commerce: Commerce;
    public collection: Collection;
    public inventory: Inventory;
    public item: Item;
    public location: Location;
    public crm: Crm;
    public deal: Deal;
    public event: Event;
    public lead: Lead;
    public pipeline: Pipeline;
    public enrich: Enrich;
    public person: Person;
    public hris: Hris;
    public employee: Employee;
    public group: Group;
    public martech: Martech;
    public list: List;
    public member: Member;
    public passthrough: Passthrough;
    public storage: Storage;
    public file: File;
    public ticketing: Ticketing;
    public customer: Customer;
    public note: Note;
    public ticket: Ticket;
    public uc: Uc;
    public call: Call;
    public unified: Unified;
    public apicall: Apicall;
    public connection: Connection;
    public integration: Integration;
    public auth: Auth;
    public login: Login;
    public issue: Issue;
    public webhook: Webhook;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.accounting = new Accounting(this.sdkConfiguration);
        this.account = new Account(this.sdkConfiguration);
        this.contact = new Contact(this.sdkConfiguration);
        this.invoice = new Invoice(this.sdkConfiguration);
        this.organization = new Organization(this.sdkConfiguration);
        this.payment = new Payment(this.sdkConfiguration);
        this.payout = new Payout(this.sdkConfiguration);
        this.refund = new Refund(this.sdkConfiguration);
        this.taxrate = new Taxrate(this.sdkConfiguration);
        this.transaction = new Transaction(this.sdkConfiguration);
        this.ats = new Ats(this.sdkConfiguration);
        this.application = new Application(this.sdkConfiguration);
        this.applicationstatus = new Applicationstatus(this.sdkConfiguration);
        this.candidate = new Candidate(this.sdkConfiguration);
        this.company = new Company(this.sdkConfiguration);
        this.document = new Document(this.sdkConfiguration);
        this.interview = new Interview(this.sdkConfiguration);
        this.job = new Job(this.sdkConfiguration);
        this.scorecard = new Scorecard(this.sdkConfiguration);
        this.commerce = new Commerce(this.sdkConfiguration);
        this.collection = new Collection(this.sdkConfiguration);
        this.inventory = new Inventory(this.sdkConfiguration);
        this.item = new Item(this.sdkConfiguration);
        this.location = new Location(this.sdkConfiguration);
        this.crm = new Crm(this.sdkConfiguration);
        this.deal = new Deal(this.sdkConfiguration);
        this.event = new Event(this.sdkConfiguration);
        this.lead = new Lead(this.sdkConfiguration);
        this.pipeline = new Pipeline(this.sdkConfiguration);
        this.enrich = new Enrich(this.sdkConfiguration);
        this.person = new Person(this.sdkConfiguration);
        this.hris = new Hris(this.sdkConfiguration);
        this.employee = new Employee(this.sdkConfiguration);
        this.group = new Group(this.sdkConfiguration);
        this.martech = new Martech(this.sdkConfiguration);
        this.list = new List(this.sdkConfiguration);
        this.member = new Member(this.sdkConfiguration);
        this.passthrough = new Passthrough(this.sdkConfiguration);
        this.storage = new Storage(this.sdkConfiguration);
        this.file = new File(this.sdkConfiguration);
        this.ticketing = new Ticketing(this.sdkConfiguration);
        this.customer = new Customer(this.sdkConfiguration);
        this.note = new Note(this.sdkConfiguration);
        this.ticket = new Ticket(this.sdkConfiguration);
        this.uc = new Uc(this.sdkConfiguration);
        this.call = new Call(this.sdkConfiguration);
        this.unified = new Unified(this.sdkConfiguration);
        this.apicall = new Apicall(this.sdkConfiguration);
        this.connection = new Connection(this.sdkConfiguration);
        this.integration = new Integration(this.sdkConfiguration);
        this.auth = new Auth(this.sdkConfiguration);
        this.login = new Login(this.sdkConfiguration);
        this.issue = new Issue(this.sdkConfiguration);
        this.webhook = new Webhook(this.sdkConfiguration);
    }
}
