# Customers
(*customers*)

### Available Operations

* [get](#get) - Get customers
* [delete](#delete) - Delete customers
* [update](#update) - Update customers
* [list](#list) - List customers
* [create](#create) - Create customers
* [count](#count) - Get customers count

## get

Get a single customers record

### Example Usage

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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The id of the model                                                                                                                                                            |
| `xIntegrationosSecret`                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | IntegrationOS API key                                                                                                                                                          |
| `xIntegrationosConnectionKey`                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of a Connected Account                                                                                                                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetCustomersIdResponse](../../models/operations/getcustomersidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## delete

Delete a single customers record

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";

async function run() {
  const sdk = new IntegrationOS();

  const id = "string";
  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  
  const res = await sdk.customers.delete(id, xIntegrationosSecret, xIntegrationosConnectionKey);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The id of the model                                                                                                                                                            |
| `xIntegrationosSecret`                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | IntegrationOS API key                                                                                                                                                          |
| `xIntegrationosConnectionKey`                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of a Connected Account                                                                                                                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DeleteCustomersIdResponse](../../models/operations/deletecustomersidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## update

Update a single customers record

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";
import { CustomerType, PatchCustomersIdType, PreferredContactMethod, Status } from "@integrationos/node/models/operations";

async function run() {
  const sdk = new IntegrationOS();

  const id = "string";
  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  const requestBody = {
    addresses: [
      {
        geoLocation: {},
        customFields: [
          {},
        ],
      },
    ],
    defaultAddress: {
      geoLocation: {},
      customFields: [
        {},
      ],
    },
    tags: [
      "string",
    ],
    socialProfiles: [
      {
        additionalInfo: {},
      },
    ],
  };
  
  const res = await sdk.customers.update(id, xIntegrationosSecret, xIntegrationosConnectionKey, requestBody);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The id of the model                                                                                                                                                            |
| `xIntegrationosSecret`                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | IntegrationOS API key                                                                                                                                                          |
| `xIntegrationosConnectionKey`                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of a Connected Account                                                                                                                                   |
| `requestBody`                                                                                                                                                                  | [operations.PatchCustomersIdRequestBody](../../models/operations/patchcustomersidrequestbody.md)                                                                               | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PatchCustomersIdResponse](../../models/operations/patchcustomersidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## list

Get all customers records

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";

async function run() {
  const sdk = new IntegrationOS();

  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  
  const res = await sdk.customers.list(xIntegrationosSecret, xIntegrationosConnectionKey);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xIntegrationosSecret`                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | IntegrationOS API key                                                                                                                                                          |
| `xIntegrationosConnectionKey`                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of a Connected Account                                                                                                                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetCustomersResponse](../../models/operations/getcustomersresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## create

Create a single customers record

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";
import {
  PostCustomersCustomersType,
  PostCustomersCustomerType,
  PostCustomersPreferredContactMethod,
  PostCustomersStatus,
} from "@integrationos/node/models/operations";

async function run() {
  const sdk = new IntegrationOS();

  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  const requestBody = {
    id: "<ID>",
    title: "string",
    fullName: "string",
    firstName: "string",
    middleName: "string",
    lastName: "string",
    email: "Jena.Nienow28@yahoo.com",
    phoneNumber: "string",
    dateOfBirth: 1343.65,
    addresses: [
      {
        geoLocation: {},
        customFields: [
          {},
        ],
      },
    ],
    defaultAddress: {
      geoLocation: {},
      customFields: [
        {},
      ],
    },
    company: "Bernhard, Zieme and Schinner",
    companyId: "string",
    currency: "Iranian Rial",
    notes: "string",
    createdAt: 9510.62,
    updatedAt: 8915.1,
    status: PostCustomersStatus.Active,
    customerSegment: "string",
    customerType: PostCustomersCustomerType.Retail,
    loyaltyProgramMembership: "string",
    preferredContactMethod: PostCustomersPreferredContactMethod.Email,
    tags: [
      "string",
    ],
    metadata: "string",
    socialProfiles: [
      {
        additionalInfo: {},
      },
    ],
    source: "string",
  };
  
  const res = await sdk.customers.create(xIntegrationosSecret, xIntegrationosConnectionKey, requestBody);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xIntegrationosSecret`                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | IntegrationOS API key                                                                                                                                                          |
| `xIntegrationosConnectionKey`                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of a Connected Account                                                                                                                                   |
| `requestBody`                                                                                                                                                                  | [operations.PostCustomersRequestBody](../../models/operations/postcustomersrequestbody.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostCustomersResponse](../../models/operations/postcustomersresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## count

Get the count of customers records

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";

async function run() {
  const sdk = new IntegrationOS();

  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  
  const res = await sdk.customers.count(xIntegrationosSecret, xIntegrationosConnectionKey);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xIntegrationosSecret`                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | IntegrationOS API key                                                                                                                                                          |
| `xIntegrationosConnectionKey`                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of a Connected Account                                                                                                                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetCustomersCountResponse](../../models/operations/getcustomerscountresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
