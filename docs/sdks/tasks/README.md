# Tasks
(*tasks*)

### Available Operations

* [get](#get) - Get tasks
* [delete](#delete) - Delete tasks
* [update](#update) - Update tasks
* [list](#list) - List tasks
* [create](#create) - Create tasks
* [count](#count) - Get tasks count

## get

Get a single tasks record

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";

async function run() {
  const sdk = new IntegrationOS();

  const id = "string";
  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  
  const res = await sdk.tasks.get(id, xIntegrationosSecret, xIntegrationosConnectionKey);

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

**Promise<[operations.GetTasksIdResponse](../../models/operations/gettasksidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## delete

Delete a single tasks record

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";

async function run() {
  const sdk = new IntegrationOS();

  const id = "string";
  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  
  const res = await sdk.tasks.delete(id, xIntegrationosSecret, xIntegrationosConnectionKey);

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

**Promise<[operations.DeleteTasksIdResponse](../../models/operations/deletetasksidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## update

Update a single tasks record

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";
import {  } from "@integrationos/node/models";
import {
  PatchTasksIdCommunications,
  PatchTasksIdGender,
  PatchTasksIdMimeType,
  PatchTasksIdPriority,
  PatchTasksIdStatus,
  PatchTasksIdTasksCommunications,
  PatchTasksIdTasksGender,
  PatchTasksIdTasksMimeType,
  PatchTasksIdTasksRequestMimeType,
  PatchTasksIdTasksRequestRequestBodyCreatedByPaymentMethodsType,
  PatchTasksIdTasksRequestRequestBodyCreatedBySocialLinksAdditionalInfoType,
  PatchTasksIdTasksRequestRequestBodyCreatedBySocialLinksType,
  PatchTasksIdTasksRequestRequestBodyMimeType,
  PatchTasksIdTasksRequestRequestBodyType,
  PatchTasksIdTasksRequestStatus,
  PatchTasksIdTasksRequestType,
  PatchTasksIdTasksStatus,
  PatchTasksIdTasksType,
} from "@integrationos/node/models/operations";

async function run() {
  const sdk = new IntegrationOS();

  const id = "string";
  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  const requestBody = {
    assignee: {
      profilePicture: {
        tags: [
          "string",
        ],
      },
      coverPhoto: {
        tags: [
          "string",
        ],
      },
      addresses: [
        {
          geoLocation: {},
          customFields: [
            {},
          ],
        },
      ],
      roles: [
        PatchTasksIdRoles.Moderator,
      ],
      preferences: {},
      socialLinks: {
        additionalInfo: {},
      },
      sso: [
        {
          scopes: [
            "string",
          ],
        },
      ],
      paymentMethods: {},
    },
    createdBy: {
      profilePicture: {
        tags: [
          "string",
        ],
      },
      coverPhoto: {
        tags: [
          "string",
        ],
      },
      addresses: [
        {
          geoLocation: {},
          customFields: [
            {},
          ],
        },
      ],
      roles: [
        PatchTasksIdTasksRoles.User,
      ],
      preferences: {},
      socialLinks: {
        additionalInfo: {},
      },
      sso: [
        {
          scopes: [
            "string",
          ],
        },
      ],
      paymentMethods: {},
    },
    labels: [
      "string",
    ],
    comments: [
      {
        author: {},
        metadata: [
          {},
        ],
      },
    ],
    attachments: [
      {
        metadata: {},
        associatedWith: {},
        permissions: {},
      },
    ],
    subTaskIds: [
      "string",
    ],
    dependOnTaskIds: [
      "string",
    ],
    relatedToTaskId: [
      "string",
    ],
    customFields: [
      {},
    ],
    watchers: [
      {
        profilePicture: {},
        coverPhoto: {},
        addresses: [
          {},
        ],
        roles: [
          PatchTasksIdTasksRequestRoles.Admin,
        ],
        preferences: {},
        socialLinks: {},
        sso: [
          {},
        ],
        paymentMethods: {},
      },
    ],
    notifications: [
      {
        recipient: {},
        customFields: [
          {},
        ],
        attachments: [
          {},
        ],
      },
    ],
  };
  
  const res = await sdk.tasks.update(id, xIntegrationosSecret, xIntegrationosConnectionKey, requestBody);

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
| `requestBody`                                                                                                                                                                  | [operations.PatchTasksIdRequestBody](../../models/operations/patchtasksidrequestbody.md)                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PatchTasksIdResponse](../../models/operations/patchtasksidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## list

Get all tasks records

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";

async function run() {
  const sdk = new IntegrationOS();

  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  
  const res = await sdk.tasks.list(xIntegrationosSecret, xIntegrationosConnectionKey);

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

**Promise<[operations.GetTasksResponse](../../models/operations/gettasksresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## create

Create a single tasks record

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";
import {  } from "@integrationos/node/models";
import {
  PostTasksCommunications,
  PostTasksGender,
  PostTasksMimeType,
  PostTasksPriority,
  PostTasksStatus,
  PostTasksTasksCommunications,
  PostTasksTasksGender,
  PostTasksTasksMimeType,
  PostTasksTasksRequestMimeType,
  PostTasksTasksRequestRequestBodyCreatedByPaymentMethodsType,
  PostTasksTasksRequestRequestBodyCreatedBySocialLinksAdditionalInfoType,
  PostTasksTasksRequestRequestBodyCreatedBySocialLinksType,
  PostTasksTasksRequestRequestBodyMimeType,
  PostTasksTasksRequestRequestBodyType,
  PostTasksTasksRequestStatus,
  PostTasksTasksRequestType,
  PostTasksTasksStatus,
  PostTasksTasksType,
} from "@integrationos/node/models/operations";

async function run() {
  const sdk = new IntegrationOS();

  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  const requestBody = {
    id: "<ID>",
    title: "string",
    description: "Multi-tiered human-resource model",
    status: PostTasksStatus.OnHold,
    priority: PostTasksPriority.Medium,
    dueDate: 2884.08,
    dueTimezone: "string",
    assignee: {
      profilePicture: {
        tags: [
          "string",
        ],
      },
      coverPhoto: {
        tags: [
          "string",
        ],
      },
      addresses: [
        {
          geoLocation: {},
          customFields: [
            {},
          ],
        },
      ],
      roles: [
        PostTasksRoles.User,
      ],
      preferences: {},
      socialLinks: {
        additionalInfo: {},
      },
      sso: [
        {
          scopes: [
            "string",
          ],
        },
      ],
      paymentMethods: {},
    },
    createdBy: {
      profilePicture: {
        tags: [
          "string",
        ],
      },
      coverPhoto: {
        tags: [
          "string",
        ],
      },
      addresses: [
        {
          geoLocation: {},
          customFields: [
            {},
          ],
        },
      ],
      roles: [
        PostTasksTasksRoles.Moderator,
      ],
      preferences: {},
      socialLinks: {
        additionalInfo: {},
      },
      sso: [
        {
          scopes: [
            "string",
          ],
        },
      ],
      paymentMethods: {},
    },
    createdAt: 690.25,
    updatedAt: 9967.06,
    labels: [
      "string",
    ],
    comments: [
      {
        author: {},
        metadata: [
          {},
        ],
      },
    ],
    attachments: [
      {
        metadata: {},
        associatedWith: {},
        permissions: {},
      },
    ],
    timeEstimate: "string",
    timeLogged: "string",
    subTaskIds: [
      "string",
    ],
    parentTaskId: "string",
    dependOnTaskIds: [
      "string",
    ],
    relatedToTaskId: [
      "string",
    ],
    repeat: "string",
    customFields: [
      {},
    ],
    watchers: [
      {
        profilePicture: {},
        coverPhoto: {},
        addresses: [
          {},
        ],
        roles: [
          PostTasksTasksRequestRoles.Moderator,
        ],
        preferences: {},
        socialLinks: {},
        sso: [
          {},
        ],
        paymentMethods: {},
      },
    ],
    completionPercentage: 3768.44,
    notifications: [
      {
        recipient: {},
        customFields: [
          {},
        ],
        attachments: [
          {},
        ],
      },
    ],
  };
  
  const res = await sdk.tasks.create(xIntegrationosSecret, xIntegrationosConnectionKey, requestBody);

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
| `requestBody`                                                                                                                                                                  | [operations.PostTasksRequestBody](../../models/operations/posttasksrequestbody.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.PostTasksResponse](../../models/operations/posttasksresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## count

Get the count of tasks records

### Example Usage

```typescript
import { IntegrationOS } from "@integrationos/node";

async function run() {
  const sdk = new IntegrationOS();

  const xIntegrationosSecret = "string";
  const xIntegrationosConnectionKey = "string";
  
  const res = await sdk.tasks.count(xIntegrationosSecret, xIntegrationosConnectionKey);

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

**Promise<[operations.GetTasksCountResponse](../../models/operations/gettaskscountresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
