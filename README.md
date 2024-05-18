SDK for [Unified.to](https://unified.to) API
</div>

<!-- Start SDK Installation [installation] -->
## Installation

### NPM

```bash
npm add @unified-api/typescript-sdk
```

### Yarn

```bash
yarn add @unified-api/typescript-sdk
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

async function run() {
    const sdk = new UnifiedTo({
        security: {
            jwt: "<YOUR_API_KEY_HERE>",
        },
    });

    const res = await sdk.accounting.listAccountingAccounts({
        connectionId: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
        console.log(res.accountingAccounts);
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.unified.to` | None |
| 1 | `https://api-eu.unified.to` | None |

#### Example

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { Status, TypeT } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
    const sdk = new UnifiedTo({
        serverIdx: 1,
        security: {
            jwt: "<YOUR_API_KEY_HERE>",
        },
    });

    const res = await sdk.accounting.createAccountingAccount({
        accountingAccount: {
            raw: {
                key: "<value>",
            },
        },
        connectionId: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { Status, TypeT } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
    const sdk = new UnifiedTo({
        serverURL: "https://api.unified.to",
        security: {
            jwt: "<YOUR_API_KEY_HERE>",
        },
    });

    const res = await sdk.accounting.createAccountingAccount({
        accountingAccount: {
            raw: {
                key: "<value>",
            },
        },
        connectionId: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { @unified-api/typescript-sdk } from "UnifiedTo";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new UnifiedTo({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name    | Type    | Scheme  |
| ------- | ------- | ------- |
| `jwt`   | apiKey  | API key |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { Status, TypeT } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
    const sdk = new UnifiedTo({
        security: {
            jwt: "<YOUR_API_KEY_HERE>",
        },
    });

    const res = await sdk.accounting.createAccountingAccount({
        accountingAccount: {
            raw: {
                key: "<value>",
            },
        },
        connectionId: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Authentication [security] -->

<!-- No SDK Installation -->
<!-- No SDK Example Usage -->
<!-- No SDK Available Operations -->
<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Example

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { Status, TypeT } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
    const sdk = new UnifiedTo({
        security: {
            jwt: "<YOUR_API_KEY_HERE>",
        },
    });

    let res;
    try {
        res = await sdk.accounting.createAccountingAccount({
            accountingAccount: {
                raw: {
                    key: "<value>",
                },
            },
            connectionId: "<value>",
        });
    } catch (err) {
        if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->


