/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {GaxiosPromise} from 'gaxios';
import {
  Compute,
  JWT,
  OAuth2Client,
  UserRefreshClient,
} from 'google-auth-library';
import {
  APIRequestContext,
  BodyResponseCallback,
  createAPIRequest,
  GlobalOptions,
  GoogleConfigurable,
  MethodOptions,
} from 'googleapis-common';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace cloudresourcemanager_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
  }

  interface StandardParameters {
    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API
     * access, quota, and reports. Required unless you provide an OAuth 2.0
     * token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be
     * any arbitrary string assigned to a user, but should not exceed 40
     * characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Cloud Resource Manager API
   *
   * Creates, reads, and updates metadata for Google Cloud Platform resource
   * containers.
   *
   * @example
   * const {google} = require('googleapis');
   * const cloudresourcemanager = google.cloudresourcemanager('v1beta1');
   *
   * @namespace cloudresourcemanager
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
   * @param {object=} options Options for Cloudresourcemanager
   */
  export class Cloudresourcemanager {
    context: APIRequestContext;
    organizations: Resource$Organizations;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {_options: options || {}, google};

      this.organizations = new Resource$Organizations(this.context);
      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Identifying information for a single ancestor of a project.
   */
  export interface Schema$Ancestor {
    /**
     * Resource id of the ancestor.
     */
    resourceId?: Schema$ResourceId;
  }
  /**
   * Specifies the audit configuration for a service. The configuration
   * determines which permission types are logged, and what identities, if any,
   * are exempted from logging. An AuditConfig must have one or more
   * AuditLogConfigs.  If there are AuditConfigs for both `allServices` and a
   * specific service, the union of the two AuditConfigs is used for that
   * service: the log_types specified in each AuditConfig are enabled, and the
   * exempted_members in each AuditLogConfig are exempted.  Example Policy with
   * multiple AuditConfigs:      {       &quot;audit_configs&quot;: [         {
   * &quot;service&quot;: &quot;allServices&quot; &quot;audit_log_configs&quot;:
   * [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;,
   * &quot;exempted_members&quot;: [ &quot;user:foo@gmail.com&quot; ] }, {
   * &quot;log_type&quot;: &quot;DATA_WRITE&quot;,             },             {
   * &quot;log_type&quot;: &quot;ADMIN_READ&quot;,             }           ] },
   * {           &quot;service&quot;: &quot;fooservice.googleapis.com&quot;
   * &quot;audit_log_configs&quot;: [             { &quot;log_type&quot;:
   * &quot;DATA_READ&quot;,             },             { &quot;log_type&quot;:
   * &quot;DATA_WRITE&quot;,               &quot;exempted_members&quot;: [
   * &quot;user:bar@gmail.com&quot;               ]             }           ] }
   * ]     }  For fooservice, this policy enables DATA_READ, DATA_WRITE and
   * ADMIN_READ logging. It also exempts foo@gmail.com from DATA_READ logging,
   * and bar@gmail.com from DATA_WRITE logging.
   */
  export interface Schema$AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$AuditLogConfig[];
    /**
     * Specifies a service that will be enabled for audit logging. For example,
     * `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a
     * special value that covers all services.
     */
    service?: string;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example: {
   * &quot;audit_log_configs&quot;: [         {           &quot;log_type&quot;:
   * &quot;DATA_READ&quot;,           &quot;exempted_members&quot;: [
   * &quot;user:foo@gmail.com&quot;           ]         },         {
   * &quot;log_type&quot;: &quot;DATA_WRITE&quot;,         }       ]     }  This
   * enables &#39;DATA_READ&#39; and &#39;DATA_WRITE&#39; logging, while
   * exempting foo@gmail.com from DATA_READ logging.
   */
  export interface Schema$AuditLogConfig {
    /**
     * Specifies the identities that do not cause logging for this type of
     * permission. Follows the same format of Binding.members.
     */
    exemptedMembers?: string[];
    /**
     * The log type that this config enables.
     */
    logType?: string;
  }
  /**
   * Associates `members` with a `role`.
   */
  export interface Schema$Binding {
    /**
     * The condition that is associated with this binding. NOTE: An unsatisfied
     * condition will not allow user access via current binding. Different
     * bindings, including their conditions, are examined independently.
     */
    condition?: Schema$Expr;
    /**
     * Specifies the identities requesting access for a Cloud Platform resource.
     * `members` can have the following values:  * `allUsers`: A special
     * identifier that represents anyone who is    on the internet; with or
     * without a Google account.  * `allAuthenticatedUsers`: A special
     * identifier that represents anyone    who is authenticated with a Google
     * account or a service account.  * `user:{emailid}`: An email address that
     * represents a specific Google    account. For example, `alice@gmail.com` .
     * * `serviceAccount:{emailid}`: An email address that represents a service
     * account. For example, `my-other-app@appspot.gserviceaccount.com`.  *
     * `group:{emailid}`: An email address that represents a Google group. For
     * example, `admins@example.com`.   * `domain:{domain}`: The G Suite domain
     * (primary) that represents all the    users of that domain. For example,
     * `google.com` or `example.com`.
     */
    members?: string[];
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`,
     * `roles/editor`, or `roles/owner`.
     */
    role?: string;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated
   * empty messages in your APIs. A typical example is to use it as the request
   * or the response type of an API method. For instance:      service Foo { rpc
   * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
   * representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Represents an expression text. Example:      title: &quot;User account
   * presence&quot;     description: &quot;Determines whether the request has a
   * user account&quot;     expression: &quot;size(request.user) &gt; 0&quot;
   */
  export interface Schema$Expr {
    /**
     * An optional description of the expression. This is a longer text which
     * describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string;
    /**
     * Textual representation of an expression in Common Expression Language
     * syntax.  The application context of the containing message determines
     * which well-known feature set of CEL is supported.
     */
    expression?: string;
    /**
     * An optional string indicating the location of the expression for error
     * reporting, e.g. a file name and a position in the file.
     */
    location?: string;
    /**
     * An optional title for the expression, i.e. a short string describing its
     * purpose. This can be used e.g. in UIs which allow to enter the
     * expression.
     */
    title?: string;
  }
  /**
   * Metadata describing a long running folder operation
   */
  export interface Schema$FolderOperation {
    /**
     * The resource name of the folder or organization we are either creating
     * the folder under or moving the folder to.
     */
    destinationParent?: string;
    /**
     * The display name of the folder.
     */
    displayName?: string;
    /**
     * The type of this operation.
     */
    operationType?: string;
    /**
     * The resource name of the folder&#39;s parent. Only applicable when the
     * operation_type is MOVE.
     */
    sourceParent?: string;
  }
  /**
   * A classification of the Folder Operation error.
   */
  export interface Schema$FolderOperationError {
    /**
     * The type of operation error experienced.
     */
    errorMessageId?: string;
  }
  /**
   * The request sent to the GetAncestry method.
   */
  export interface Schema$GetAncestryRequest {}
  /**
   * Response from the GetAncestry method.
   */
  export interface Schema$GetAncestryResponse {
    /**
     * Ancestors are ordered from bottom to top of the resource hierarchy. The
     * first ancestor is the project itself, followed by the project&#39;s
     * parent, etc.
     */
    ancestor?: Schema$Ancestor[];
  }
  /**
   * Request message for `GetIamPolicy` method.
   */
  export interface Schema$GetIamPolicyRequest {}
  /**
   * The response returned from the `ListOrganizations` method.
   */
  export interface Schema$ListOrganizationsResponse {
    /**
     * A pagination token to be used to retrieve the next page of results. If
     * the result is too large to fit within the page size specified in the
     * request, this field will be set with a token that can be used to fetch
     * the next page of results. If this field is empty, it indicates that this
     * response contains the last page of results.
     */
    nextPageToken?: string;
    /**
     * The list of Organizations that matched the list query, possibly
     * paginated.
     */
    organizations?: Schema$Organization[];
  }
  /**
   * A page of the response received from the ListProjects method.  A paginated
   * response where more pages are available has `next_page_token` set. This
   * token can be used in a subsequent request to retrieve the next request
   * page.
   */
  export interface Schema$ListProjectsResponse {
    /**
     * Pagination token.  If the result set is too large to fit in a single
     * response, this token is returned. It encodes the position of the current
     * result cursor. Feeding this value into a new list request with the
     * `page_token` parameter gives the next page of the results.  When
     * `next_page_token` is not filled in, there is no next page and the list
     * returned is the last page in the result set.  Pagination tokens have a
     * limited lifetime.
     */
    nextPageToken?: string;
    /**
     * The list of Projects that matched the list filter. This list can be
     * paginated.
     */
    projects?: Schema$Project[];
  }
  /**
   * The root node in the resource hierarchy to which a particular entity&#39;s
   * (e.g., company) resources belong.
   */
  export interface Schema$Organization {
    /**
     * Timestamp when the Organization was created. Assigned by the server.
     * @OutputOnly
     */
    creationTime?: string;
    /**
     * A human-readable string that refers to the Organization in the GCP
     * Console UI. This string is set by the server and cannot be changed. The
     * string will be set to the primary domain (for example,
     * &quot;google.com&quot;) of the G Suite customer that owns the
     * organization. @OutputOnly
     */
    displayName?: string;
    /**
     * The organization&#39;s current lifecycle state. Assigned by the server.
     * @OutputOnly
     */
    lifecycleState?: string;
    /**
     * Output Only. The resource name of the organization. This is the
     * organization&#39;s relative path in the API. Its format is
     * &quot;organizations/[organization_id]&quot;. For example,
     * &quot;organizations/1234&quot;.
     */
    name?: string;
    /**
     * An immutable id for the Organization that is assigned on creation. This
     * should be omitted when creating a new Organization. This field is
     * read-only.
     */
    organizationId?: string;
    /**
     * The owner of this Organization. The owner should be specified on
     * creation. Once set, it cannot be changed. This field is required.
     */
    owner?: Schema$OrganizationOwner;
  }
  /**
   * The entity that owns an Organization. The lifetime of the Organization and
   * all of its descendants are bound to the `OrganizationOwner`. If the
   * `OrganizationOwner` is deleted, the Organization and all its descendants
   * will be deleted.
   */
  export interface Schema$OrganizationOwner {
    /**
     * The G Suite customer id used in the Directory API.
     */
    directoryCustomerId?: string;
  }
  /**
   * Defines an Identity and Access Management (IAM) policy. It is used to
   * specify access control policies for Cloud Platform resources.   A `Policy`
   * consists of a list of `bindings`. A `binding` binds a list of `members` to
   * a `role`, where the members can be user accounts, Google groups, Google
   * domains, and service accounts. A `role` is a named list of permissions
   * defined by IAM.  **JSON Example**      {       &quot;bindings&quot;: [ {
   * &quot;role&quot;: &quot;roles/owner&quot;,           &quot;members&quot;: [
   * &quot;user:mike@example.com&quot;, &quot;group:admins@example.com&quot;,
   * &quot;domain:google.com&quot;,
   * &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot; ] }, {
   * &quot;role&quot;: &quot;roles/viewer&quot;,           &quot;members&quot;:
   * [&quot;user:sean@example.com&quot;]         }       ]     }  **YAML
   * Example**      bindings:     - members:       - user:mike@example.com -
   * group:admins@example.com       - domain:google.com       -
   * serviceAccount:my-other-app@appspot.gserviceaccount.com       role:
   * roles/owner     - members:       - user:sean@example.com       role:
   * roles/viewer   For a description of IAM and its features, see the [IAM
   * developer&#39;s guide](https://cloud.google.com/iam/docs).
   */
  export interface Schema$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$AuditConfig[];
    /**
     * Associates a list of `members` to a `role`. `bindings` with no members
     * will result in an error.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help
     * prevent simultaneous updates of a policy from overwriting each other. It
     * is strongly suggested that systems make use of the `etag` in the
     * read-modify-write cycle to perform policy updates in order to avoid race
     * conditions: An `etag` is returned in the response to `getIamPolicy`, and
     * systems are expected to put that etag in the request to `setIamPolicy` to
     * ensure that their change will be applied to the same version of the
     * policy.  If no `etag` is provided in the call to `setIamPolicy`, then the
     * existing policy is overwritten blindly.
     */
    etag?: string;
    /**
     * Deprecated.
     */
    version?: number;
  }
  /**
   * A Project is a high-level Google Cloud Platform entity.  It is a container
   * for ACLs, APIs, App Engine Apps, VMs, and other Google Cloud Platform
   * resources.
   */
  export interface Schema$Project {
    /**
     * Creation time.  Read-only.
     */
    createTime?: string;
    /**
     * The labels associated with this Project.  Label keys must be between 1
     * and 63 characters long and must conform to the following regular
     * expression: \[a-z\](\[-a-z0-9\]*\[a-z0-9\])?.  Label values must be
     * between 0 and 63 characters long and must conform to the regular
     * expression (\[a-z\](\[-a-z0-9\]*\[a-z0-9\])?)?. A label value can be
     * empty.  No more than 256 labels can be associated with a given resource.
     * Clients should store labels in a representation such as JSON that does
     * not depend on specific characters being disallowed.  Example:
     * &lt;code&gt;&quot;environment&quot; : &quot;dev&quot;&lt;/code&gt;
     * Read-write.
     */
    labels?: {[key: string]: string};
    /**
     * The Project lifecycle state.  Read-only.
     */
    lifecycleState?: string;
    /**
     * The optional user-assigned display name of the Project. When present it
     * must be between 4 to 30 characters. Allowed characters are: lowercase and
     * uppercase letters, numbers, hyphen, single-quote, double-quote, space,
     * and exclamation point.  Example: &lt;code&gt;My Project&lt;/code&gt;
     * Read-write.
     */
    name?: string;
    /**
     * An optional reference to a parent Resource.  Supported parent types
     * include &quot;organization&quot; and &quot;folder&quot;. Once set, the
     * parent cannot be cleared. The `parent` can be set on creation or using
     * the `UpdateProject` method; the end user must have the
     * `resourcemanager.projects.create` permission on the parent.  Read-write.
     */
    parent?: Schema$ResourceId;
    /**
     * The unique, user-assigned ID of the Project. It must be 6 to 30 lowercase
     * letters, digits, or hyphens. It must start with a letter. Trailing
     * hyphens are prohibited.  Example: &lt;code&gt;tokyo-rain-123&lt;/code&gt;
     * Read-only after creation.
     */
    projectId?: string;
    /**
     * The number uniquely identifying the project.  Example:
     * &lt;code&gt;415104041262&lt;/code&gt; Read-only.
     */
    projectNumber?: string;
  }
  /**
   * A status object which is used as the `metadata` field for the Operation
   * returned by CreateProject. It provides insight for when significant phases
   * of Project creation have completed.
   */
  export interface Schema$ProjectCreationStatus {
    /**
     * Creation time of the project creation workflow.
     */
    createTime?: string;
    /**
     * True if the project can be retrieved using GetProject. No other
     * operations on the project are guaranteed to work until the project
     * creation is complete.
     */
    gettable?: boolean;
    /**
     * True if the project creation process is complete.
     */
    ready?: boolean;
  }
  /**
   * A container to reference an id for any resource type. A `resource` in
   * Google Cloud Platform is a generic term for something you (a developer) may
   * want to interact with through one of our API&#39;s. Some examples are an
   * App Engine app, a Compute Engine instance, a Cloud SQL database, and so on.
   */
  export interface Schema$ResourceId {
    /**
     * Required field for the type-specific id. This should correspond to the id
     * used in the type-specific API&#39;s.
     */
    id?: string;
    /**
     * Required field representing the resource type this id is for. At present,
     * the valid types are &quot;project&quot;, &quot;folder&quot;, and
     * &quot;organization&quot;.
     */
    type?: string;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size
     * of the policy is limited to a few 10s of KB. An empty policy is a valid
     * policy but certain Cloud Platform services (such as Projects) might
     * reject them.
     */
    policy?: Schema$Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify.
     * Only the fields in the mask will be modified. If no mask is provided, the
     * following default mask is used: paths: &quot;bindings, etag&quot; This
     * field is only used by Cloud IAM.
     */
    updateMask?: string;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with
     * wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed.
     * For more information see [IAM
     * Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[];
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is
     * allowed.
     */
    permissions?: string[];
  }
  /**
   * The request sent to the UndeleteProject method.
   */
  export interface Schema$UndeleteProjectRequest {}

  export class Resource$Organizations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * cloudresourcemanager.organizations.get
     * @desc Fetches an Organization resource identified by the specified
     * resource name.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The resource name of the Organization to fetch, e.g.
     * "organizations/1234". name: 'organizations/my-organization',  // TODO:
     * Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.organizations.get(request, function(err, response)
     * { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.organizations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the Organization to fetch. This is the organization's relative path in the API, formatted as "organizations/[organizationId]". For example, "organizations/1234".
     * @param {string=} params.organizationId The id of the Organization resource to fetch. This field is deprecated and will be removed in v1. Use name instead.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Organizations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Organization>;
    get(
      params: Params$Resource$Organizations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Organization>,
      callback: BodyResponseCallback<Schema$Organization>
    ): void;
    get(
      params: Params$Resource$Organizations$Get,
      callback: BodyResponseCallback<Schema$Organization>
    ): void;
    get(callback: BodyResponseCallback<Schema$Organization>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Get
        | BodyResponseCallback<Schema$Organization>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Organization>,
      callback?: BodyResponseCallback<Schema$Organization>
    ): void | GaxiosPromise<Schema$Organization> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Organization>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Organization>(parameters);
      }
    }

    /**
     * cloudresourcemanager.organizations.getIamPolicy
     * @desc Gets the access control policy for an Organization resource. May be
     * empty if no such policy or resource exists. The `resource` field should
     * be the organization's resource name, e.g. "organizations/123".
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy is being requested.
     *     // See the operation documentation for the appropriate value for this
     * field. resource_: 'organizations/my-organization',  // TODO: Update
     * placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.organizations.getIamPolicy(request, function(err,
     * response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.organizations.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().GetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Organizations$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Organizations$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Organizations$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Organizations$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * cloudresourcemanager.organizations.list
     * @desc Lists Organization resources that are visible to the user and
     * satisfy the specified filter. This method returns Organizations in an
     * unspecified order. New Organizations do not necessarily appear at the end
     * of the list.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var organizationsPage = response['organizations'];
     *     if (!organizationsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < organizationsPage.length; i++) {
     *       // TODO: Change code below to process each resource in
     * `organizationsPage`: console.log(JSON.stringify(organizationsPage[i],
     * null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       cloudResourceManager.organizations.list(request, handlePage);
     *     }
     *   };
     *
     *   cloudResourceManager.organizations.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.organizations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter An optional query string used to filter the Organizations to return in the response. Filter rules are case-insensitive.   Organizations may be filtered by `owner.directoryCustomerId` or by `domain`, where the domain is a G Suite domain, for example:  |Filter|Description| |------|-----------| |owner.directorycustomerid:123456789|Organizations with `owner.directory_customer_id` equal to `123456789`.| |domain:google.com|Organizations corresponding to the domain `google.com`.|  This field is optional.
     * @param {integer=} params.pageSize The maximum number of Organizations to return in the response. This field is optional.
     * @param {string=} params.pageToken A pagination token returned from a previous call to `ListOrganizations` that indicates from where listing should continue. This field is optional.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Organizations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOrganizationsResponse>;
    list(
      params: Params$Resource$Organizations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOrganizationsResponse>,
      callback: BodyResponseCallback<Schema$ListOrganizationsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$List,
      callback: BodyResponseCallback<Schema$ListOrganizationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListOrganizationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$List
        | BodyResponseCallback<Schema$ListOrganizationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOrganizationsResponse>,
      callback?: BodyResponseCallback<Schema$ListOrganizationsResponse>
    ): void | GaxiosPromise<Schema$ListOrganizationsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/organizations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListOrganizationsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListOrganizationsResponse>(parameters);
      }
    }

    /**
     * cloudresourcemanager.organizations.setIamPolicy
     * @desc Sets the access control policy on an Organization resource.
     * Replaces any existing policy. The `resource` field should be the
     * organization's resource name, e.g. "organizations/123".
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy is being specified.
     *     // See the operation documentation for the appropriate value for this
     * field. resource_: 'organizations/my-organization',  // TODO: Update
     * placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.organizations.setIamPolicy(request, function(err,
     * response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.organizations.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Organizations$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Organizations$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Organizations$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Organizations$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * cloudresourcemanager.organizations.testIamPermissions
     * @desc Returns permissions that a caller has on the specified
     * Organization. The `resource` field should be the organization's resource
     * name, e.g. "organizations/123".
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy detail is being
     * requested.
     *     // See the operation documentation for the appropriate value for this
     * field. resource_: 'organizations/my-organization',  // TODO: Update
     * placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.organizations.testIamPermissions(request,
     * function(err, response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.organizations.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Organizations$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Organizations$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Organizations$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Organizations$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }

    /**
     * cloudresourcemanager.organizations.update
     * @desc Updates an Organization resource identified by the specified
     * resource name.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Output Only. The resource name of the organization. This is the
     *     // organization's relative path in the API. Its format is
     *     // "organizations/[organization_id]". For example,
     * "organizations/1234". name: 'organizations/my-organization',  // TODO:
     * Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. All existing
     * properties
     *       // will be replaced.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.organizations.update(request, function(err,
     * response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.organizations.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output Only. The resource name of the organization. This is the organization's relative path in the API. Its format is "organizations/[organization_id]". For example, "organizations/1234".
     * @param {().Organization} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Organizations$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Organization>;
    update(
      params: Params$Resource$Organizations$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Organization>,
      callback: BodyResponseCallback<Schema$Organization>
    ): void;
    update(
      params: Params$Resource$Organizations$Update,
      callback: BodyResponseCallback<Schema$Organization>
    ): void;
    update(callback: BodyResponseCallback<Schema$Organization>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Organizations$Update
        | BodyResponseCallback<Schema$Organization>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Organization>,
      callback?: BodyResponseCallback<Schema$Organization>
    ): void | GaxiosPromise<Schema$Organization> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Organization>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Organization>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the Organization to fetch. This is the
     * organization's relative path in the API, formatted as
     * "organizations/[organizationId]". For example, "organizations/1234".
     */
    name?: string;
    /**
     * The id of the Organization resource to fetch. This field is deprecated
     * and will be removed in v1. Use name instead.
     */
    organizationId?: string;
  }
  export interface Params$Resource$Organizations$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being requested. See the
     * operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Organizations$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * An optional query string used to filter the Organizations to return in
     * the response. Filter rules are case-insensitive.   Organizations may be
     * filtered by `owner.directoryCustomerId` or by `domain`, where the domain
     * is a G Suite domain, for example:  |Filter|Description|
     * |------|-----------| |owner.directorycustomerid:123456789|Organizations
     * with `owner.directory_customer_id` equal to `123456789`.|
     * |domain:google.com|Organizations corresponding to the domain
     * `google.com`.|  This field is optional.
     */
    filter?: string;
    /**
     * The maximum number of Organizations to return in the response. This field
     * is optional.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to `ListOrganizations`
     * that indicates from where listing should continue. This field is
     * optional.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Organizations$Setiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the
     * operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Organizations$Testiampermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested.
     * See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }
  export interface Params$Resource$Organizations$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Output Only. The resource name of the organization. This is the
     * organization's relative path in the API. Its format is
     * "organizations/[organization_id]". For example, "organizations/1234".
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Organization;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * cloudresourcemanager.projects.create
     * @desc Creates a Project resource.  Initially, the Project resource is
     * owned by its creator exclusively. The creator can later grant permission
     * to others to read or update the Project.  Several APIs are activated
     * automatically for the Project, including Google Cloud Storage. The parent
     * is identified by a specified ResourceId, which must include both an ID
     * and a type, such as project, folder, or organization.  This method does
     * not associate the new project with a billing account. You can set or
     * update the billing account associated with a project using the
     * [`projects.updateBillingInfo`]
     * (/billing/reference/rest/v1/projects/updateBillingInfo) method.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.projects.create(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.projects.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.useLegacyStack A safety hatch to opt out of the new reliable project creation process.
     * @param {().Project} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Project>;
    create(
      params: Params$Resource$Projects$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Project>,
      callback: BodyResponseCallback<Schema$Project>
    ): void;
    create(
      params: Params$Resource$Projects$Create,
      callback: BodyResponseCallback<Schema$Project>
    ): void;
    create(callback: BodyResponseCallback<Schema$Project>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Create
        | BodyResponseCallback<Schema$Project>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Project>,
      callback?: BodyResponseCallback<Schema$Project>
    ): void | GaxiosPromise<Schema$Project> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/projects').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Project>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Project>(parameters);
      }
    }

    /**
     * cloudresourcemanager.projects.delete
     * @desc Marks the Project identified by the specified `project_id` (for
     * example, `my-project-123`) for deletion. This method will only affect the
     * Project if it has a lifecycle state of ACTIVE.  This method changes the
     * Project's lifecycle state from ACTIVE to DELETE_REQUESTED. The deletion
     * starts at an unspecified time, at which point the project is no longer
     * accessible.  Until the deletion completes, you can check the lifecycle
     * state checked by retrieving the Project with GetProject, and the Project
     * remains visible to ListProjects. However, you cannot update the project.
     * After the deletion completes, the Project is not retrievable by the
     * GetProject and ListProjects methods.  The caller must have modify
     * permissions for this Project.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The Project ID (for example, `foo-bar-123`).
     *     // Required.
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.projects.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.projects.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The Project ID (for example, `foo-bar-123`).  Required.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/projects/{projectId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * cloudresourcemanager.projects.get
     * @desc Retrieves the Project identified by the specified `project_id` (for
     * example, `my-project-123`).  The caller must have read permissions for
     * this Project.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The Project ID (for example, `my-project-123`).
     *     // Required.
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.projects.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.projects.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The Project ID (for example, `my-project-123`).  Required.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Project>;
    get(
      params: Params$Resource$Projects$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Project>,
      callback: BodyResponseCallback<Schema$Project>
    ): void;
    get(
      params: Params$Resource$Projects$Get,
      callback: BodyResponseCallback<Schema$Project>
    ): void;
    get(callback: BodyResponseCallback<Schema$Project>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Get
        | BodyResponseCallback<Schema$Project>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Project>,
      callback?: BodyResponseCallback<Schema$Project>
    ): void | GaxiosPromise<Schema$Project> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/projects/{projectId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Project>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Project>(parameters);
      }
    }

    /**
     * cloudresourcemanager.projects.getAncestry
     * @desc Gets a list of ancestors in the resource hierarchy for the Project
     * identified by the specified `project_id` (for example, `my-project-123`).
     * The caller must have read permissions for this Project.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The Project ID (for example, `my-project-123`).
     *     // Required.
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.projects.getAncestry(request, function(err,
     * response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.projects.getAncestry
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The Project ID (for example, `my-project-123`).  Required.
     * @param {().GetAncestryRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getAncestry(
      params?: Params$Resource$Projects$Getancestry,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetAncestryResponse>;
    getAncestry(
      params: Params$Resource$Projects$Getancestry,
      options: MethodOptions | BodyResponseCallback<Schema$GetAncestryResponse>,
      callback: BodyResponseCallback<Schema$GetAncestryResponse>
    ): void;
    getAncestry(
      params: Params$Resource$Projects$Getancestry,
      callback: BodyResponseCallback<Schema$GetAncestryResponse>
    ): void;
    getAncestry(
      callback: BodyResponseCallback<Schema$GetAncestryResponse>
    ): void;
    getAncestry(
      paramsOrCallback?:
        | Params$Resource$Projects$Getancestry
        | BodyResponseCallback<Schema$GetAncestryResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GetAncestryResponse>,
      callback?: BodyResponseCallback<Schema$GetAncestryResponse>
    ): void | GaxiosPromise<Schema$GetAncestryResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getancestry;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Getancestry;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/projects/{projectId}:getAncestry'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GetAncestryResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GetAncestryResponse>(parameters);
      }
    }

    /**
     * cloudresourcemanager.projects.getIamPolicy
     * @desc Returns the IAM access control policy for the specified Project.
     * Permission is denied if the policy or the resource does not exist.  For
     * additional information about resource structure and identification, see
     * [Resource Names](/apis/design/resource_names).
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy is being requested.
     *     // See the operation documentation for the appropriate value for this
     * field. resource_: 'my-resource',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.projects.getIamPolicy(request, function(err,
     * response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.projects.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().GetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/projects/{resource}:getIamPolicy'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * cloudresourcemanager.projects.list
     * @desc Lists Projects that are visible to the user and satisfy the
     * specified filter. This method returns Projects in an unspecified order.
     * This method is eventually consistent with project mutations; this means
     * that a newly created project may not appear in the results or recent
     * updates to an existing project may not be reflected in the results. To
     * retrieve the latest state of a project, use the GetProjectmethod.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var projectsPage = response['projects'];
     *     if (!projectsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < projectsPage.length; i++) {
     *       // TODO: Change code below to process each resource in
     * `projectsPage`: console.log(JSON.stringify(projectsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       cloudResourceManager.projects.list(request, handlePage);
     *     }
     *   };
     *
     *   cloudResourceManager.projects.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.projects.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter An expression for filtering the results of the request.  Filter rules are case insensitive. The fields eligible for filtering are:  + `name` + `id` + <code>labels.<em>key</em></code> where *key* is the name of a label  Some examples of using labels as filters:  |Filter|Description| |------|-----------| |name:how*|The project's name starts with "how".| |name:Howl|The project's name is `Howl` or `howl`.| |name:HOWL|Equivalent to above.| |NAME:howl|Equivalent to above.| |labels.color:*|The project has the label `color`.| |labels.color:red|The project's label `color` has the value `red`.| |labels.color:red&nbsp;labels.size:big|The project's label `color` has the value `red` and its label `size` has the value `big`.  If you specify a filter that has both `parent.type` and `parent.id`, then the `resourcemanager.projects.list` permission is checked on the parent. If the user has this permission, all projects under the parent will be returned after remaining filters have been applied. If the user lacks this permission, then all projects for which the user has the `resourcemanager.projects.get` permission will be returned after remaining filters have been applied. If no filter is specified, the call will return projects for which the user has `resourcemanager.projects.get` permissions.  Optional.
     * @param {integer=} params.pageSize The maximum number of Projects to return in the response. The server can return fewer Projects than requested. If unspecified, server picks an appropriate default.  Optional.
     * @param {string=} params.pageToken A pagination token returned from a previous call to ListProjects that indicates from where listing should continue.  Optional.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListProjectsResponse>;
    list(
      params: Params$Resource$Projects$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListProjectsResponse>,
      callback: BodyResponseCallback<Schema$ListProjectsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$List,
      callback: BodyResponseCallback<Schema$ListProjectsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListProjectsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$List
        | BodyResponseCallback<Schema$ListProjectsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListProjectsResponse>,
      callback?: BodyResponseCallback<Schema$ListProjectsResponse>
    ): void | GaxiosPromise<Schema$ListProjectsResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/projects').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListProjectsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListProjectsResponse>(parameters);
      }
    }

    /**
     * cloudresourcemanager.projects.setIamPolicy
     * @desc Sets the IAM access control policy for the specified Project.
     * Overwrites any existing policy.  The following constraints apply when
     * using `setIamPolicy()`:  + Project does not support `allUsers` and
     * `allAuthenticatedUsers` as `members` in a `Binding` of a `Policy`.  + The
     * owner role can be granted only to `user` and `serviceAccount`.  + Service
     * accounts can be made owners of a project directly without any
     * restrictions. However, to be added as an owner, a user must be invited
     * via Cloud Platform console and must accept the invitation.  + A user
     * cannot be granted the owner role using `setIamPolicy()`. The user must be
     * granted the owner role using the Cloud Platform Console and must
     * explicitly accept the invitation.  + Invitations to grant the owner role
     * cannot be sent using `setIamPolicy()`; they must be sent only using the
     * Cloud Platform Console.  + Membership changes that leave the project
     * without any owners that have accepted the Terms of Service (ToS) will be
     * rejected.  + If the project is not part of an organization, there must be
     * at least one owner who has accepted the Terms of Service (ToS) agreement
     * in the policy. Calling `setIamPolicy()` to remove the last ToS-accepted
     * owner from the policy will fail. This restriction also applies to legacy
     * projects that no longer have owners who have accepted the ToS. Edits to
     * IAM policies will be rejected until the lack of a ToS-accepting owner is
     * rectified.  + This method will replace the existing policy, and cannot be
     * used to append additional IAM settings.  Note: Removing service accounts
     * from policies or changing their roles can render services completely
     * inoperable. It is important to understand how the service account is
     * being used before removing or updating its roles.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy is being specified.
     *     // See the operation documentation for the appropriate value for this
     * field. resource_: 'my-resource',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.projects.setIamPolicy(request, function(err,
     * response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.projects.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Projects$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/projects/{resource}:setIamPolicy'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * cloudresourcemanager.projects.testIamPermissions
     * @desc Returns permissions that a caller has on the specified Project.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy detail is being
     * requested.
     *     // See the operation documentation for the appropriate value for this
     * field. resource_: 'my-resource',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.projects.testIamPermissions(request, function(err,
     * response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.projects.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Projects$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/projects/{resource}:testIamPermissions'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }

    /**
     * cloudresourcemanager.projects.undelete
     * @desc Restores the Project identified by the specified `project_id` (for
     * example, `my-project-123`). You can only use this method for a Project
     * that has a lifecycle state of DELETE_REQUESTED. After deletion starts,
     * the Project cannot be restored.  The caller must have modify permissions
     * for this Project.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The project ID (for example, `foo-bar-123`).
     *     // Required.
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.projects.undelete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.projects.undelete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The project ID (for example, `foo-bar-123`).  Required.
     * @param {().UndeleteProjectRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    undelete(
      params?: Params$Resource$Projects$Undelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    undelete(
      params: Params$Resource$Projects$Undelete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    undelete(
      params: Params$Resource$Projects$Undelete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    undelete(callback: BodyResponseCallback<Schema$Empty>): void;
    undelete(
      paramsOrCallback?:
        | Params$Resource$Projects$Undelete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Undelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Undelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/projects/{projectId}:undelete').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * cloudresourcemanager.projects.update
     * @desc Updates the attributes of the Project identified by the specified
     * `project_id` (for example, `my-project-123`).  The caller must have
     * modify permissions for this Project.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The project ID (for example, `my-project-123`).
     *     // Required.
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. All existing
     * properties
     *       // will be replaced.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   cloudResourceManager.projects.update(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias cloudresourcemanager.projects.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The project ID (for example, `my-project-123`).  Required.
     * @param {().Project} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Projects$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Project>;
    update(
      params: Params$Resource$Projects$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Project>,
      callback: BodyResponseCallback<Schema$Project>
    ): void;
    update(
      params: Params$Resource$Projects$Update,
      callback: BodyResponseCallback<Schema$Project>
    ): void;
    update(callback: BodyResponseCallback<Schema$Project>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Update
        | BodyResponseCallback<Schema$Project>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Project>,
      callback?: BodyResponseCallback<Schema$Project>
    ): void | GaxiosPromise<Schema$Project> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/projects/{projectId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Project>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Project>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Create extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * A safety hatch to opt out of the new reliable project creation process.
     */
    useLegacyStack?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Project;
  }
  export interface Params$Resource$Projects$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The Project ID (for example, `foo-bar-123`).  Required.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The Project ID (for example, `my-project-123`).  Required.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Getancestry
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The Project ID (for example, `my-project-123`).  Required.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetAncestryRequest;
  }
  export interface Params$Resource$Projects$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being requested. See the
     * operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * An expression for filtering the results of the request.  Filter rules are
     * case insensitive. The fields eligible for filtering are:  + `name` + `id`
     * + <code>labels.<em>key</em></code> where *key* is the name of a label
     * Some examples of using labels as filters:  |Filter|Description|
     * |------|-----------| |name:how*|The project's name starts with "how".|
     * |name:Howl|The project's name is `Howl` or `howl`.| |name:HOWL|Equivalent
     * to above.| |NAME:howl|Equivalent to above.| |labels.color:*|The project
     * has the label `color`.| |labels.color:red|The project's label `color` has
     * the value `red`.| |labels.color:red&nbsp;labels.size:big|The project's
     * label `color` has the value `red` and its label `size` has the value
     * `big`.  If you specify a filter that has both `parent.type` and
     * `parent.id`, then the `resourcemanager.projects.list` permission is
     * checked on the parent. If the user has this permission, all projects
     * under the parent will be returned after remaining filters have been
     * applied. If the user lacks this permission, then all projects for which
     * the user has the `resourcemanager.projects.get` permission will be
     * returned after remaining filters have been applied. If no filter is
     * specified, the call will return projects for which the user has
     * `resourcemanager.projects.get` permissions.  Optional.
     */
    filter?: string;
    /**
     * The maximum number of Projects to return in the response. The server can
     * return fewer Projects than requested. If unspecified, server picks an
     * appropriate default.  Optional.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to ListProjects that
     * indicates from where listing should continue.  Optional.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Projects$Setiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the
     * operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Testiampermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested.
     * See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }
  export interface Params$Resource$Projects$Undelete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The project ID (for example, `foo-bar-123`).  Required.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UndeleteProjectRequest;
  }
  export interface Params$Resource$Projects$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The project ID (for example, `my-project-123`).  Required.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Project;
  }
}
