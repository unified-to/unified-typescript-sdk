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
import { Invoice } from "./invoice";
import { Job } from "./job";
import { Lead } from "./lead";
import { List } from "./list";
import { Login } from "./login";
import { Martech } from "./martech";
import { Member } from "./member";
import { Note } from "./note";
import { Passthrough } from "./passthrough";
import { Payment } from "./payment";
import { Person } from "./person";
import { Pipeline } from "./pipeline";
import { Scorecard } from "./scorecard";
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
    sdkVersion = "0.10.4";
    genVersion = "2.214.3";
    userAgent = "speakeasy-sdk/typescript 0.10.4 2.214.3 1.0 unified-to";
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
    public customer: Customer;
    public invoice: Invoice;
    public payment: Payment;
    public transaction: Transaction;
    public ats: Ats;
    public application: Application;
    public applicationstatus: Applicationstatus;
    public candidate: Candidate;
    public document: Document;
    public interview: Interview;
    public job: Job;
    public scorecard: Scorecard;
    public crm: Crm;
    public company: Company;
    public contact: Contact;
    public deal: Deal;
    public event: Event;
    public file: File;
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
    public ticketing: Ticketing;
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
        this.customer = new Customer(this.sdkConfiguration);
        this.invoice = new Invoice(this.sdkConfiguration);
        this.payment = new Payment(this.sdkConfiguration);
        this.transaction = new Transaction(this.sdkConfiguration);
        this.ats = new Ats(this.sdkConfiguration);
        this.application = new Application(this.sdkConfiguration);
        this.applicationstatus = new Applicationstatus(this.sdkConfiguration);
        this.candidate = new Candidate(this.sdkConfiguration);
        this.document = new Document(this.sdkConfiguration);
        this.interview = new Interview(this.sdkConfiguration);
        this.job = new Job(this.sdkConfiguration);
        this.scorecard = new Scorecard(this.sdkConfiguration);
        this.crm = new Crm(this.sdkConfiguration);
        this.company = new Company(this.sdkConfiguration);
        this.contact = new Contact(this.sdkConfiguration);
        this.deal = new Deal(this.sdkConfiguration);
        this.event = new Event(this.sdkConfiguration);
        this.file = new File(this.sdkConfiguration);
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
        this.ticketing = new Ticketing(this.sdkConfiguration);
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
        this.webhook = new Webhook(this.sdkConfiguration);
    }
}
