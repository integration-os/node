# IntegrationOS Node.js Library

The [IntegrationOS library for Node.js](https://www.npmjs.com/package/@integrationos/node) provides convenient access to the IntegrationOS API from applications written in server-side JavaScript.

## Install

With npm:

```jsx
npm i @integrationos/node
```

With yarn:

```jsx
yarn add @integrationos/node
```

## Configuration

To use the library you must provide an API key and Connection key. Both are located in the IntegrationOS dashboard. 

```jsx
import { IntegrationOS } from '@integrationOS/node';

const integrate = new IntegrationOS("sk_live_1234");

const response = await integrate
    .customers("live::shopify::org_1234")
    .get("cus_OT3CLnirqcpjvw");

console.log(response);
```

## Full Documentation

Please refer to the official IntegrationOS [Documentation](https://docs.integrationos.com/docs/setup) and [API Reference](https://docs.integrationos.com/reference) for more information and Node.js usage examples.
