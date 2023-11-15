/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { objectToClass, SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { IntegrationSupport } from "./integrationsupport";
import { PropertyIntegrationCategories } from "./propertyintegrationcategories";
import { Expose, Transform } from "class-transformer";

/**
 * Informational object for supported integrations.
 */
export class Integration extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "api_docs_url" })
    apiDocsUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "beta" })
    beta?: boolean;

    /**
     * The categories of support solutions that this integration has
     */
    @SpeakeasyMetadata()
    @Expose({ name: "categories" })
    categories: PropertyIntegrationCategories[];

    @SpeakeasyMetadata()
    @Expose({ name: "color" })
    color?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    createdAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "fa_icon" })
    faIcon?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "in_progress" })
    inProgress: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "is_active" })
    isActive?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "logo_url" })
    logoUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "rate_limit_description" })
    rateLimitDescription?: string;

    @SpeakeasyMetadata({ elemType: IntegrationSupport })
    @Expose({ name: "support" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, IntegrationSupport> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], IntegrationSupport);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    support: Record<string, IntegrationSupport>;

    @SpeakeasyMetadata()
    @Expose({ name: "tested_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    testedAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "text_color" })
    textColor?: string;

    /**
     * instructions for the user on how to find the token/key
     */
    @SpeakeasyMetadata()
    @Expose({ name: "token_instructions" })
    tokenInstructions?: string[];

    /**
     * if auth_types = 'token'
     */
    @SpeakeasyMetadata()
    @Expose({ name: "token_names" })
    tokenNames?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: string;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    updatedAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "web_url" })
    webUrl?: string;
}
