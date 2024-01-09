# openapi

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/productionize-sdks/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add <UNSET>
```

### Yarn

```bash
yarn add <UNSET>
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { IntegrationOS } from "@integrationos/node";

async function run() {
    const sdk = new IntegrationOS();

    const id = "string";
    const xIntegrationosSecret = "string";
    const xIntegrationosConnectionKey = "string";

    const res = await sdk.customers.get(id, xIntegrationosSecret, xIntegrationosConnectionKey);

    if (res?.statusCode !== 200) {
        throw new Error("Unexpected status code: " + res?.statusCode || "-");
    }

    // handle response
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [customers](docs/sdks/customers/README.md)

* [get](docs/sdks/customers/README.md#get) - Get customers
* [delete](docs/sdks/customers/README.md#delete) - Delete customers
* [update](docs/sdks/customers/README.md#update) - Update customers
* [list](docs/sdks/customers/README.md#list) - List customers
* [create](docs/sdks/customers/README.md#create) - Create customers
* [count](docs/sdks/customers/README.md#count) - Get customers count

### [companies](docs/sdks/companies/README.md)

* [get](docs/sdks/companies/README.md#get) - Get companies
* [delete](docs/sdks/companies/README.md#delete) - Delete companies
* [update](docs/sdks/companies/README.md#update) - Update companies
* [list](docs/sdks/companies/README.md#list) - List companies
* [create](docs/sdks/companies/README.md#create) - Create companies
* [count](docs/sdks/companies/README.md#count) - Get companies count

### [leads](docs/sdks/leads/README.md)

* [get](docs/sdks/leads/README.md#get) - Get leads
* [delete](docs/sdks/leads/README.md#delete) - Delete leads
* [update](docs/sdks/leads/README.md#update) - Update leads
* [list](docs/sdks/leads/README.md#list) - List leads
* [create](docs/sdks/leads/README.md#create) - Create leads
* [count](docs/sdks/leads/README.md#count) - Get leads count

### [notes](docs/sdks/notes/README.md)

* [get](docs/sdks/notes/README.md#get) - Get notes
* [delete](docs/sdks/notes/README.md#delete) - Delete notes
* [update](docs/sdks/notes/README.md#update) - Update notes
* [list](docs/sdks/notes/README.md#list) - List notes
* [create](docs/sdks/notes/README.md#create) - Create notes
* [count](docs/sdks/notes/README.md#count) - Get notes count

### [users](docs/sdks/users/README.md)

* [get](docs/sdks/users/README.md#get) - Get users
* [delete](docs/sdks/users/README.md#delete) - Delete users
* [update](docs/sdks/users/README.md#update) - Update users
* [list](docs/sdks/users/README.md#list) - List users
* [create](docs/sdks/users/README.md#create) - Create users
* [count](docs/sdks/users/README.md#count) - Get users count

### [opportunities](docs/sdks/opportunities/README.md)

* [get](docs/sdks/opportunities/README.md#get) - Get opportunities
* [delete](docs/sdks/opportunities/README.md#delete) - Delete opportunities
* [update](docs/sdks/opportunities/README.md#update) - Update opportunities
* [list](docs/sdks/opportunities/README.md#list) - List opportunities
* [create](docs/sdks/opportunities/README.md#create) - Create opportunities
* [count](docs/sdks/opportunities/README.md#count) - Get opportunities count

### [orders](docs/sdks/orders/README.md)

* [get](docs/sdks/orders/README.md#get) - Get orders
* [delete](docs/sdks/orders/README.md#delete) - Delete orders
* [update](docs/sdks/orders/README.md#update) - Update orders
* [list](docs/sdks/orders/README.md#list) - List orders
* [create](docs/sdks/orders/README.md#create) - Create orders
* [count](docs/sdks/orders/README.md#count) - Get orders count

### [products](docs/sdks/products/README.md)

* [get](docs/sdks/products/README.md#get) - Get products
* [delete](docs/sdks/products/README.md#delete) - Delete products
* [update](docs/sdks/products/README.md#update) - Update products
* [list](docs/sdks/products/README.md#list) - List products
* [create](docs/sdks/products/README.md#create) - Create products
* [count](docs/sdks/products/README.md#count) - Get products count

### [tasks](docs/sdks/tasks/README.md)

* [get](docs/sdks/tasks/README.md#get) - Get tasks
* [delete](docs/sdks/tasks/README.md#delete) - Delete tasks
* [update](docs/sdks/tasks/README.md#update) - Update tasks
* [list](docs/sdks/tasks/README.md#list) - List tasks
* [create](docs/sdks/tasks/README.md#create) - Create tasks
* [count](docs/sdks/tasks/README.md#count) - Get tasks count

### [contacts](docs/sdks/contacts/README.md)

* [get](docs/sdks/contacts/README.md#get) - Get contacts
* [delete](docs/sdks/contacts/README.md#delete) - Delete contacts
* [update](docs/sdks/contacts/README.md#update) - Update contacts
* [list](docs/sdks/contacts/README.md#list) - List contacts
* [create](docs/sdks/contacts/README.md#create) - Create contacts
* [count](docs/sdks/contacts/README.md#count) - Get contacts count
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Example

```typescript
import { IntegrationOS } from "@integrationos/node";
import * as errors from "@integrationos/node/models/errors";

async function run() {
    const sdk = new IntegrationOS();

    const id = "string";
    const xIntegrationosSecret = "string";
    const xIntegrationosConnectionKey = "string";

    const res = await sdk.customers
        .get(id, xIntegrationosSecret, xIntegrationosConnectionKey)
        .catch((err) => {
            throw err;
        });

    if (res?.statusCode !== 200) {
        throw new Error("Unexpected status code: " + res?.statusCode || "-");
    }

    // handle response
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.integrationos.com/v1/unified` | None |




### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { IntegrationOS } from "@integrationos/node";
import { HTTPClient } from "@integrationos/node/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000);
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new IntegrationOS({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
# node
