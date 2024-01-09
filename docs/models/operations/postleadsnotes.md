# PostLeadsNotes


## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `title`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `content`                                                                                      | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `updatedAt`                                                                                    | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `lastAccessed`                                                                                 | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `reminder`                                                                                     | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `color`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `priority`                                                                                     | [operations.PostLeadsPriority](../../models/operations/postleadspriority.md)                   | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `author`                                                                                       | [operations.PostLeadsAuthor](../../models/operations/postleadsauthor.md)                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `tags`                                                                                         | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `attachments`                                                                                  | [operations.PostLeadsLeadsAttachments](../../models/operations/postleadsleadsattachments.md)[] | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `sharedWith`                                                                                   | [operations.PostLeadsSharedWith](../../models/operations/postleadssharedwith.md)[]             | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `visibility`                                                                                   | [operations.PostLeadsVisibility](../../models/operations/postleadsvisibility.md)               | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `status`                                                                                       | [operations.PostLeadsStatus](../../models/operations/postleadsstatus.md)                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `metadata`                                                                                     | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |