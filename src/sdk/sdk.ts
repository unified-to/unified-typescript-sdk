/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Agent } from "./agent";
import { Apicall } from "./apicall";
import { Application } from "./application";
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
import { Job } from "./job";
import { Lead } from "./lead";
import { List } from "./list";
import { Login } from "./login";
import { Martech } from "./martech";
import { Member } from "./member";
import * as shared from "./models/shared";
import { Note } from "./note";
import { Passthrough } from "./passthrough";
import { Person } from "./person";
import { Pipeline } from "./pipeline";
import { Team } from "./team";
import { Ticket } from "./ticket";
import { Ticketing } from "./ticketing";
import { Uc } from "./uc";
import { Unified } from "./unified";
import { User } from "./user";
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
    sdkVersion = "0.3.4";
    genVersion = "2.147.0";
    userAgent = "speakeasy-sdk/typescript 0.3.4 2.147.0 1.0 Unified-to";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Unified.to API: One API to Rule Them All
 */
export class UnifiedTo {
    public agent: Agent;
    public apicall: Apicall;
    public application: Application;
    public ats: Ats;
    public auth: Auth;
    public call: Call;
    public candidate: Candidate;
    public company: Company;
    public connection: Connection;
    public contact: Contact;
    public crm: Crm;
    public customer: Customer;
    public deal: Deal;
    public document: Document;
    public employee: Employee;
    public enrich: Enrich;
    public event: Event;
    public file: File;
    public group: Group;
    public hris: Hris;
    public integration: Integration;
    public interview: Interview;
    public job: Job;
    public lead: Lead;
    public list: List;
    public login: Login;
    public martech: Martech;
    public member: Member;
    public note: Note;
    public passthrough: Passthrough;
    public person: Person;
    public pipeline: Pipeline;
    public team: Team;
    public ticket: Ticket;
    public ticketing: Ticketing;
    public uc: Uc;
    public unified: Unified;
    public user: User;
    public webhook: Webhook;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.agent = new Agent(this.sdkConfiguration);
        this.apicall = new Apicall(this.sdkConfiguration);
        this.application = new Application(this.sdkConfiguration);
        this.ats = new Ats(this.sdkConfiguration);
        this.auth = new Auth(this.sdkConfiguration);
        this.call = new Call(this.sdkConfiguration);
        this.candidate = new Candidate(this.sdkConfiguration);
        this.company = new Company(this.sdkConfiguration);
        this.connection = new Connection(this.sdkConfiguration);
        this.contact = new Contact(this.sdkConfiguration);
        this.crm = new Crm(this.sdkConfiguration);
        this.customer = new Customer(this.sdkConfiguration);
        this.deal = new Deal(this.sdkConfiguration);
        this.document = new Document(this.sdkConfiguration);
        this.employee = new Employee(this.sdkConfiguration);
        this.enrich = new Enrich(this.sdkConfiguration);
        this.event = new Event(this.sdkConfiguration);
        this.file = new File(this.sdkConfiguration);
        this.group = new Group(this.sdkConfiguration);
        this.hris = new Hris(this.sdkConfiguration);
        this.integration = new Integration(this.sdkConfiguration);
        this.interview = new Interview(this.sdkConfiguration);
        this.job = new Job(this.sdkConfiguration);
        this.lead = new Lead(this.sdkConfiguration);
        this.list = new List(this.sdkConfiguration);
        this.login = new Login(this.sdkConfiguration);
        this.martech = new Martech(this.sdkConfiguration);
        this.member = new Member(this.sdkConfiguration);
        this.note = new Note(this.sdkConfiguration);
        this.passthrough = new Passthrough(this.sdkConfiguration);
        this.person = new Person(this.sdkConfiguration);
        this.pipeline = new Pipeline(this.sdkConfiguration);
        this.team = new Team(this.sdkConfiguration);
        this.ticket = new Ticket(this.sdkConfiguration);
        this.ticketing = new Ticketing(this.sdkConfiguration);
        this.uc = new Uc(this.sdkConfiguration);
        this.unified = new Unified(this.sdkConfiguration);
        this.user = new User(this.sdkConfiguration);
        this.webhook = new Webhook(this.sdkConfiguration);
    }
}
