/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * The parameters to list SAS credentials of a storage account.
 *
 */
class AccountSasParameters {
  /**
   * Create a AccountSasParameters.
   * @member {string} services The signed services accessible with the account
   * SAS. Possible values include: Blob (b), Queue (q), Table (t), File (f).
   * Possible values include: 'b', 'q', 't', 'f'
   * @member {string} resourceTypes The signed resource types that are
   * accessible with the account SAS. Service (s): Access to service-level
   * APIs; Container (c): Access to container-level APIs; Object (o): Access to
   * object-level APIs for blobs, queue messages, table entities, and files.
   * Possible values include: 's', 'c', 'o'
   * @member {string} permissions The signed permissions for the account SAS.
   * Possible values include: Read (r), Write (w), Delete (d), List (l), Add
   * (a), Create (c), Update (u) and Process (p). Possible values include: 'r',
   * 'd', 'w', 'l', 'a', 'c', 'u', 'p'
   * @member {string} [iPAddressOrRange] An IP address or a range of IP
   * addresses from which to accept requests.
   * @member {string} [protocols] The protocol permitted for a request made
   * with the account SAS. Possible values include: 'https,http', 'https'
   * @member {date} [sharedAccessStartTime] The time at which the SAS becomes
   * valid.
   * @member {date} sharedAccessExpiryTime The time at which the shared access
   * signature becomes invalid.
   * @member {string} [keyToSign] The key to sign the account SAS token with.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AccountSasParameters
   *
   * @returns {object} metadata of AccountSasParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AccountSasParameters',
      type: {
        name: 'Composite',
        className: 'AccountSasParameters',
        modelProperties: {
          services: {
            required: true,
            serializedName: 'signedServices',
            type: {
              name: 'String'
            }
          },
          resourceTypes: {
            required: true,
            serializedName: 'signedResourceTypes',
            type: {
              name: 'String'
            }
          },
          permissions: {
            required: true,
            serializedName: 'signedPermission',
            type: {
              name: 'String'
            }
          },
          iPAddressOrRange: {
            required: false,
            serializedName: 'signedIp',
            type: {
              name: 'String'
            }
          },
          protocols: {
            required: false,
            serializedName: 'signedProtocol',
            type: {
              name: 'Enum',
              allowedValues: [ 'https,http', 'https' ]
            }
          },
          sharedAccessStartTime: {
            required: false,
            serializedName: 'signedStart',
            type: {
              name: 'DateTime'
            }
          },
          sharedAccessExpiryTime: {
            required: true,
            serializedName: 'signedExpiry',
            type: {
              name: 'DateTime'
            }
          },
          keyToSign: {
            required: false,
            serializedName: 'keyToSign',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AccountSasParameters;
