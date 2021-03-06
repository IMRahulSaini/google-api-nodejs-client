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

export namespace youtubereporting_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
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
   * YouTube Reporting API
   *
   * Schedules reporting jobs containing your YouTube Analytics data and
   * downloads the resulting bulk data reports in the form of CSV files.
   *
   * @example
   * const {google} = require('googleapis');
   * const youtubereporting = google.youtubereporting('v1');
   *
   * @namespace youtubereporting
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Youtubereporting
   */
  export class Youtubereporting {
    context: APIRequestContext;
    jobs: Resource$Jobs;
    media: Resource$Media;
    reportTypes: Resource$Reporttypes;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {_options: options || {}, google};

      this.jobs = new Resource$Jobs(this.context);
      this.media = new Resource$Media(this.context);
      this.reportTypes = new Resource$Reporttypes(this.context);
    }
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
   * gdata
   */
  export interface Schema$GdataBlobstore2Info {
    /**
     * gdata
     */
    blobGeneration?: string;
    /**
     * gdata
     */
    blobId?: string;
    /**
     * gdata
     */
    downloadReadHandle?: string;
    /**
     * gdata
     */
    readToken?: string;
    /**
     * gdata
     */
    uploadMetadataContainer?: string;
  }
  /**
   * gdata
   */
  export interface Schema$GdataCompositeMedia {
    /**
     * gdata
     */
    blobRef?: string;
    /**
     * gdata
     */
    blobstore2Info?: Schema$GdataBlobstore2Info;
    /**
     * gdata
     */
    cosmoBinaryReference?: string;
    /**
     * gdata
     */
    crc32cHash?: number;
    /**
     * gdata
     */
    inline?: string;
    /**
     * gdata
     */
    length?: string;
    /**
     * gdata
     */
    md5Hash?: string;
    /**
     * gdata
     */
    objectId?: Schema$GdataObjectId;
    /**
     * gdata
     */
    path?: string;
    /**
     * gdata
     */
    referenceType?: string;
    /**
     * gdata
     */
    sha1Hash?: string;
  }
  /**
   * gdata
   */
  export interface Schema$GdataContentTypeInfo {
    /**
     * gdata
     */
    bestGuess?: string;
    /**
     * gdata
     */
    fromBytes?: string;
    /**
     * gdata
     */
    fromFileName?: string;
    /**
     * gdata
     */
    fromHeader?: string;
    /**
     * gdata
     */
    fromUrlPath?: string;
  }
  /**
   * gdata
   */
  export interface Schema$GdataDiffChecksumsResponse {
    /**
     * gdata
     */
    checksumsLocation?: Schema$GdataCompositeMedia;
    /**
     * gdata
     */
    chunkSizeBytes?: string;
    /**
     * gdata
     */
    objectLocation?: Schema$GdataCompositeMedia;
    /**
     * gdata
     */
    objectSizeBytes?: string;
    /**
     * gdata
     */
    objectVersion?: string;
  }
  /**
   * gdata
   */
  export interface Schema$GdataDiffDownloadResponse {
    /**
     * gdata
     */
    objectLocation?: Schema$GdataCompositeMedia;
  }
  /**
   * gdata
   */
  export interface Schema$GdataDiffUploadRequest {
    /**
     * gdata
     */
    checksumsInfo?: Schema$GdataCompositeMedia;
    /**
     * gdata
     */
    objectInfo?: Schema$GdataCompositeMedia;
    /**
     * gdata
     */
    objectVersion?: string;
  }
  /**
   * gdata
   */
  export interface Schema$GdataDiffUploadResponse {
    /**
     * gdata
     */
    objectVersion?: string;
    /**
     * gdata
     */
    originalObject?: Schema$GdataCompositeMedia;
  }
  /**
   * gdata
   */
  export interface Schema$GdataDiffVersionResponse {
    /**
     * gdata
     */
    objectSizeBytes?: string;
    /**
     * gdata
     */
    objectVersion?: string;
  }
  /**
   * gdata
   */
  export interface Schema$GdataDownloadParameters {
    /**
     * gdata
     */
    allowGzipCompression?: boolean;
    /**
     * gdata
     */
    ignoreRange?: boolean;
  }
  /**
   * gdata
   */
  export interface Schema$GdataMedia {
    /**
     * gdata
     */
    algorithm?: string;
    /**
     * gdata
     */
    bigstoreObjectRef?: string;
    /**
     * gdata
     */
    blobRef?: string;
    /**
     * gdata
     */
    blobstore2Info?: Schema$GdataBlobstore2Info;
    /**
     * gdata
     */
    compositeMedia?: Schema$GdataCompositeMedia[];
    /**
     * gdata
     */
    contentType?: string;
    /**
     * gdata
     */
    contentTypeInfo?: Schema$GdataContentTypeInfo;
    /**
     * gdata
     */
    cosmoBinaryReference?: string;
    /**
     * gdata
     */
    crc32cHash?: number;
    /**
     * gdata
     */
    diffChecksumsResponse?: Schema$GdataDiffChecksumsResponse;
    /**
     * gdata
     */
    diffDownloadResponse?: Schema$GdataDiffDownloadResponse;
    /**
     * gdata
     */
    diffUploadRequest?: Schema$GdataDiffUploadRequest;
    /**
     * gdata
     */
    diffUploadResponse?: Schema$GdataDiffUploadResponse;
    /**
     * gdata
     */
    diffVersionResponse?: Schema$GdataDiffVersionResponse;
    /**
     * gdata
     */
    downloadParameters?: Schema$GdataDownloadParameters;
    /**
     * gdata
     */
    filename?: string;
    /**
     * gdata
     */
    hash?: string;
    /**
     * gdata
     */
    hashVerified?: boolean;
    /**
     * gdata
     */
    inline?: string;
    /**
     * gdata
     */
    isPotentialRetry?: boolean;
    /**
     * gdata
     */
    length?: string;
    /**
     * gdata
     */
    md5Hash?: string;
    /**
     * gdata
     */
    mediaId?: string;
    /**
     * gdata
     */
    objectId?: Schema$GdataObjectId;
    /**
     * gdata
     */
    path?: string;
    /**
     * gdata
     */
    referenceType?: string;
    /**
     * gdata
     */
    sha1Hash?: string;
    /**
     * gdata
     */
    sha256Hash?: string;
    /**
     * gdata
     */
    timestamp?: string;
    /**
     * gdata
     */
    token?: string;
  }
  /**
   * gdata
   */
  export interface Schema$GdataObjectId {
    /**
     * gdata
     */
    bucketName?: string;
    /**
     * gdata
     */
    generation?: string;
    /**
     * gdata
     */
    objectName?: string;
  }
  /**
   * A job creating reports of a specific type.
   */
  export interface Schema$Job {
    /**
     * The creation date/time of the job.
     */
    createTime?: string;
    /**
     * The date/time when this job will expire/expired. After a job expired, no
     * new reports are generated.
     */
    expireTime?: string;
    /**
     * The server-generated ID of the job (max. 40 characters).
     */
    id?: string;
    /**
     * The name of the job (max. 100 characters).
     */
    name?: string;
    /**
     * The type of reports this job creates. Corresponds to the ID of a
     * ReportType.
     */
    reportTypeId?: string;
    /**
     * True if this a system-managed job that cannot be modified by the user;
     * otherwise false.
     */
    systemManaged?: boolean;
  }
  /**
   * Response message for ReportingService.ListJobs.
   */
  export interface Schema$ListJobsResponse {
    /**
     * The list of jobs.
     */
    jobs?: Schema$Job[];
    /**
     * A token to retrieve next page of results. Pass this value in the
     * ListJobsRequest.page_token field in the subsequent call to `ListJobs`
     * method to retrieve the next page of results.
     */
    nextPageToken?: string;
  }
  /**
   * Response message for ReportingService.ListReports.
   */
  export interface Schema$ListReportsResponse {
    /**
     * A token to retrieve next page of results. Pass this value in the
     * ListReportsRequest.page_token field in the subsequent call to
     * `ListReports` method to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of report types.
     */
    reports?: Schema$Report[];
  }
  /**
   * Response message for ReportingService.ListReportTypes.
   */
  export interface Schema$ListReportTypesResponse {
    /**
     * A token to retrieve next page of results. Pass this value in the
     * ListReportTypesRequest.page_token field in the subsequent call to
     * `ListReportTypes` method to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of report types.
     */
    reportTypes?: Schema$ReportType[];
  }
  /**
   * A report&#39;s metadata including the URL from which the report itself can
   * be downloaded.
   */
  export interface Schema$Report {
    /**
     * The date/time when this report was created.
     */
    createTime?: string;
    /**
     * The URL from which the report can be downloaded (max. 1000 characters).
     */
    downloadUrl?: string;
    /**
     * The end of the time period that the report instance covers. The value is
     * exclusive.
     */
    endTime?: string;
    /**
     * The server-generated ID of the report.
     */
    id?: string;
    /**
     * The date/time when the job this report belongs to will expire/expired.
     */
    jobExpireTime?: string;
    /**
     * The ID of the job that created this report.
     */
    jobId?: string;
    /**
     * The start of the time period that the report instance covers. The value
     * is inclusive.
     */
    startTime?: string;
  }
  /**
   * A report type.
   */
  export interface Schema$ReportType {
    /**
     * The date/time when this report type was/will be deprecated.
     */
    deprecateTime?: string;
    /**
     * The ID of the report type (max. 100 characters).
     */
    id?: string;
    /**
     * The name of the report type (max. 100 characters).
     */
    name?: string;
    /**
     * True if this a system-managed report type; otherwise false. Reporting
     * jobs for system-managed report types are created automatically and can
     * thus not be used in the `CreateJob` method.
     */
    systemManaged?: boolean;
  }

  export class Resource$Jobs {
    context: APIRequestContext;
    reports: Resource$Jobs$Reports;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.reports = new Resource$Jobs$Reports(this.context);
    }

    /**
     * youtubereporting.jobs.create
     * @desc Creates a job and returns it.
     * @alias youtubereporting.jobs.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     * @param {().Job} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Jobs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Job>;
    create(
      params: Params$Resource$Jobs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    create(
      params: Params$Resource$Jobs$Create,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    create(callback: BodyResponseCallback<Schema$Job>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Jobs$Create
        | BodyResponseCallback<Schema$Job>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>
    ): void | GaxiosPromise<Schema$Job> {
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://youtubereporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/jobs').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Job>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }

    /**
     * youtubereporting.jobs.delete
     * @desc Deletes a job.
     * @alias youtubereporting.jobs.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.jobId The ID of the job to delete.
     * @param {string=} params.onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Jobs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Jobs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Jobs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Jobs$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://youtubereporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/jobs/{jobId}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['jobId'],
        pathParams: ['jobId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * youtubereporting.jobs.get
     * @desc Gets a job.
     * @alias youtubereporting.jobs.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.jobId The ID of the job to retrieve.
     * @param {string=} params.onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Jobs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Job>;
    get(
      params: Params$Resource$Jobs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    get(
      params: Params$Resource$Jobs$Get,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    get(callback: BodyResponseCallback<Schema$Job>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Jobs$Get
        | BodyResponseCallback<Schema$Job>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>
    ): void | GaxiosPromise<Schema$Job> {
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://youtubereporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/jobs/{jobId}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['jobId'],
        pathParams: ['jobId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Job>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }

    /**
     * youtubereporting.jobs.list
     * @desc Lists jobs.
     * @alias youtubereporting.jobs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.includeSystemManaged If set to true, also system-managed jobs will be returned; otherwise only user-created jobs will be returned. System-managed jobs can neither be modified nor deleted.
     * @param {string=} params.onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     * @param {integer=} params.pageSize Requested page size. Server may return fewer jobs than requested. If unspecified, server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListJobs` method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Jobs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListJobsResponse>;
    list(
      params: Params$Resource$Jobs$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListJobsResponse>,
      callback: BodyResponseCallback<Schema$ListJobsResponse>
    ): void;
    list(
      params: Params$Resource$Jobs$List,
      callback: BodyResponseCallback<Schema$ListJobsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListJobsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Jobs$List
        | BodyResponseCallback<Schema$ListJobsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListJobsResponse>,
      callback?: BodyResponseCallback<Schema$ListJobsResponse>
    ): void | GaxiosPromise<Schema$ListJobsResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://youtubereporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/jobs').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListJobsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListJobsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Jobs$Create extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The content owner's external ID on which behalf the user is acting on. If
     * not set, the user is acting for himself (his own channel).
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Job;
  }
  export interface Params$Resource$Jobs$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the job to delete.
     */
    jobId?: string;
    /**
     * The content owner's external ID on which behalf the user is acting on. If
     * not set, the user is acting for himself (his own channel).
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Jobs$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the job to retrieve.
     */
    jobId?: string;
    /**
     * The content owner's external ID on which behalf the user is acting on. If
     * not set, the user is acting for himself (his own channel).
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Jobs$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * If set to true, also system-managed jobs will be returned; otherwise only
     * user-created jobs will be returned. System-managed jobs can neither be
     * modified nor deleted.
     */
    includeSystemManaged?: boolean;
    /**
     * The content owner's external ID on which behalf the user is acting on. If
     * not set, the user is acting for himself (his own channel).
     */
    onBehalfOfContentOwner?: string;
    /**
     * Requested page size. Server may return fewer jobs than requested. If
     * unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of ListReportTypesResponse.next_page_token
     * returned in response to the previous call to the `ListJobs` method.
     */
    pageToken?: string;
  }

  export class Resource$Jobs$Reports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtubereporting.jobs.reports.get
     * @desc Gets the metadata of a specific report.
     * @alias youtubereporting.jobs.reports.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.jobId The ID of the job.
     * @param {string=} params.onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     * @param {string} params.reportId The ID of the report to retrieve.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Jobs$Reports$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Report>;
    get(
      params: Params$Resource$Jobs$Reports$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Report>,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    get(
      params: Params$Resource$Jobs$Reports$Get,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    get(callback: BodyResponseCallback<Schema$Report>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Jobs$Reports$Get
        | BodyResponseCallback<Schema$Report>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Report>,
      callback?: BodyResponseCallback<Schema$Report>
    ): void | GaxiosPromise<Schema$Report> {
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$Reports$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Reports$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://youtubereporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/jobs/{jobId}/reports/{reportId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['jobId', 'reportId'],
        pathParams: ['jobId', 'reportId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Report>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Report>(parameters);
      }
    }

    /**
     * youtubereporting.jobs.reports.list
     * @desc Lists reports created by a specific job. Returns NOT_FOUND if the
     * job does not exist.
     * @alias youtubereporting.jobs.reports.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.createdAfter If set, only reports created after the specified date/time are returned.
     * @param {string} params.jobId The ID of the job.
     * @param {string=} params.onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     * @param {integer=} params.pageSize Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListReportsResponse.next_page_token returned in response to the previous call to the `ListReports` method.
     * @param {string=} params.startTimeAtOrAfter If set, only reports whose start time is greater than or equal the specified date/time are returned.
     * @param {string=} params.startTimeBefore If set, only reports whose start time is smaller than the specified date/time are returned.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Jobs$Reports$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListReportsResponse>;
    list(
      params: Params$Resource$Jobs$Reports$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListReportsResponse>,
      callback: BodyResponseCallback<Schema$ListReportsResponse>
    ): void;
    list(
      params: Params$Resource$Jobs$Reports$List,
      callback: BodyResponseCallback<Schema$ListReportsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListReportsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Jobs$Reports$List
        | BodyResponseCallback<Schema$ListReportsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReportsResponse>,
      callback?: BodyResponseCallback<Schema$ListReportsResponse>
    ): void | GaxiosPromise<Schema$ListReportsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Jobs$Reports$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Reports$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://youtubereporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/jobs/{jobId}/reports').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['jobId'],
        pathParams: ['jobId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListReportsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListReportsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Jobs$Reports$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the job.
     */
    jobId?: string;
    /**
     * The content owner's external ID on which behalf the user is acting on. If
     * not set, the user is acting for himself (his own channel).
     */
    onBehalfOfContentOwner?: string;
    /**
     * The ID of the report to retrieve.
     */
    reportId?: string;
  }
  export interface Params$Resource$Jobs$Reports$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * If set, only reports created after the specified date/time are returned.
     */
    createdAfter?: string;
    /**
     * The ID of the job.
     */
    jobId?: string;
    /**
     * The content owner's external ID on which behalf the user is acting on. If
     * not set, the user is acting for himself (his own channel).
     */
    onBehalfOfContentOwner?: string;
    /**
     * Requested page size. Server may return fewer report types than requested.
     * If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of ListReportsResponse.next_page_token
     * returned in response to the previous call to the `ListReports` method.
     */
    pageToken?: string;
    /**
     * If set, only reports whose start time is greater than or equal the
     * specified date/time are returned.
     */
    startTimeAtOrAfter?: string;
    /**
     * If set, only reports whose start time is smaller than the specified
     * date/time are returned.
     */
    startTimeBefore?: string;
  }

  export class Resource$Media {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtubereporting.media.download
     * @desc Method for media download. Download is supported on the URI
     * `/v1/media/{+name}?alt=media`.
     * @alias youtubereporting.media.download
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resourceName Name of the media that is being downloaded.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    download(
      params?: Params$Resource$Media$Download,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GdataMedia>;
    download(
      params: Params$Resource$Media$Download,
      options: MethodOptions | BodyResponseCallback<Schema$GdataMedia>,
      callback: BodyResponseCallback<Schema$GdataMedia>
    ): void;
    download(
      params: Params$Resource$Media$Download,
      callback: BodyResponseCallback<Schema$GdataMedia>
    ): void;
    download(callback: BodyResponseCallback<Schema$GdataMedia>): void;
    download(
      paramsOrCallback?:
        | Params$Resource$Media$Download
        | BodyResponseCallback<Schema$GdataMedia>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GdataMedia>,
      callback?: BodyResponseCallback<Schema$GdataMedia>
    ): void | GaxiosPromise<Schema$GdataMedia> {
      let params = (paramsOrCallback || {}) as Params$Resource$Media$Download;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Media$Download;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://youtubereporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/media/{+resourceName}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resourceName'],
        pathParams: ['resourceName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GdataMedia>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GdataMedia>(parameters);
      }
    }
  }

  export interface Params$Resource$Media$Download extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the media that is being downloaded.
     */
    resourceName?: string;
  }

  export class Resource$Reporttypes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtubereporting.reportTypes.list
     * @desc Lists report types.
     * @alias youtubereporting.reportTypes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.includeSystemManaged If set to true, also system-managed report types will be returned; otherwise only the report types that can be used to create new reporting jobs will be returned.
     * @param {string=} params.onBehalfOfContentOwner The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     * @param {integer=} params.pageSize Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListReportTypes` method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Reporttypes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListReportTypesResponse>;
    list(
      params: Params$Resource$Reporttypes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReportTypesResponse>,
      callback: BodyResponseCallback<Schema$ListReportTypesResponse>
    ): void;
    list(
      params: Params$Resource$Reporttypes$List,
      callback: BodyResponseCallback<Schema$ListReportTypesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListReportTypesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Reporttypes$List
        | BodyResponseCallback<Schema$ListReportTypesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReportTypesResponse>,
      callback?: BodyResponseCallback<Schema$ListReportTypesResponse>
    ): void | GaxiosPromise<Schema$ListReportTypesResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Reporttypes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Reporttypes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://youtubereporting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/reportTypes').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListReportTypesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListReportTypesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Reporttypes$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * If set to true, also system-managed report types will be returned;
     * otherwise only the report types that can be used to create new reporting
     * jobs will be returned.
     */
    includeSystemManaged?: boolean;
    /**
     * The content owner's external ID on which behalf the user is acting on. If
     * not set, the user is acting for himself (his own channel).
     */
    onBehalfOfContentOwner?: string;
    /**
     * Requested page size. Server may return fewer report types than requested.
     * If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of ListReportTypesResponse.next_page_token
     * returned in response to the previous call to the `ListReportTypes`
     * method.
     */
    pageToken?: string;
  }
}
