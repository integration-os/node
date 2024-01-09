<!-- Start SDK Example Usage [usage] -->
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