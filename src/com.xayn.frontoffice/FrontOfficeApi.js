/**
 * Front Office API
 * # Front Office The front office is typically used within front-end apps, for example a website or a mobile application. With this SDK, you can handle interactions with documents and request a list of personalized documents.  ## User Each method requires a `user_id`. From our perspective, a `user_id` is simply required to group interactions together. We don't need to know who that user is, so it is preferred to create this `user_id` in a privacy-preserving way. For example, create a hash method which transforms your user into an ID hash.  ## Document A document here is represented by its `id` and optional `properties`. In order to display a document in an interface, it's preferred to use `properties`, which is an arbitrary collection of values. For example, it could contain an image url, a full article url, the publication date, the author or much more. The properties that were added when the document was submitted to us, are just mirrored here.  ## Auth The API requires an authenticationToken when used. Please see further down in this README.md file, or refer to the test included in this SDK's codebase, on how to set this token correctly. \\
 *
 * The version of the OpenAPI document: 1.0.0-rc8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import GenericError from '../model/GenericError';
import PersonalizedDocumentsError from '../model/PersonalizedDocumentsError';
import PersonalizedDocumentsResponse from '../model/PersonalizedDocumentsResponse';
import SemanticSearchResponse from '../model/SemanticSearchResponse';
import UserInteractionError from '../model/UserInteractionError';
import UserInteractionRequest from '../model/UserInteractionRequest';

/**
* FrontOffice service.
* @module com.xayn.frontoffice/FrontOfficeApi
* @version 1.0.22
*/
export default class FrontOfficeApi {

    /**
    * Constructs a new FrontOfficeApi. 
    * @alias module:com.xayn.frontoffice/FrontOfficeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Gets personalized documents for the user.
     * Returns a list of documents personalized for the given `user_id`. Each document contains the id, the score and the properties that are attached to the document. The score is a value between 0 and 1 where a higher value means that the document matches the preferences of the user better. Note that you can request personalized documents for a specific `user_id`, only after that same `user_id` has made at least one interaction via our system.
     * @param {String} userId Id of the user
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Maximum number of personalized documents to return (default to 10)
     * @param {Date} opts.publishedAfter Only include documents which have been published after given datetime.  If used documents without a `properties.publication_date` will be ignored.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PersonalizedDocumentsResponse} and HTTP response
     */
    getPersonalizedDocumentsWithHttpInfo(userId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getPersonalizedDocuments");
      }

      let pathParams = {
        'user_id': userId
      };
      let queryParams = {
        'count': opts['count'],
        'published_after': opts['publishedAfter']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PersonalizedDocumentsResponse;
      return this.apiClient.callApi(
        '/users/{user_id}/personalized_documents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets personalized documents for the user.
     * Returns a list of documents personalized for the given `user_id`. Each document contains the id, the score and the properties that are attached to the document. The score is a value between 0 and 1 where a higher value means that the document matches the preferences of the user better. Note that you can request personalized documents for a specific `user_id`, only after that same `user_id` has made at least one interaction via our system.
     * @param {String} userId Id of the user
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Maximum number of personalized documents to return (default to 10)
     * @param {Date} opts.publishedAfter Only include documents which have been published after given datetime.  If used documents without a `properties.publication_date` will be ignored.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PersonalizedDocumentsResponse}
     */
    getPersonalizedDocuments(userId, opts) {
      return this.getPersonalizedDocumentsWithHttpInfo(userId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns documents similar to the given document.
     * Returns a list of documents that are semantically similar to the one given as input. Each document contains the id, the score and the properties. The score is a value between 0 and 1 where a higher value means that the document is more similar to the one in input
     * @param {String} documentId Id of the document
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Maximum number of semantic similar documents to return (default to 10)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SemanticSearchResponse} and HTTP response
     */
    getSimilarDocumentsWithHttpInfo(documentId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling getSimilarDocuments");
      }

      let pathParams = {
        'document_id': documentId
      };
      let queryParams = {
        'count': opts['count']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SemanticSearchResponse;
      return this.apiClient.callApi(
        '/semantic_search/{document_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns documents similar to the given document.
     * Returns a list of documents that are semantically similar to the one given as input. Each document contains the id, the score and the properties. The score is a value between 0 and 1 where a higher value means that the document is more similar to the one in input
     * @param {String} documentId Id of the document
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Maximum number of semantic similar documents to return (default to 10)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SemanticSearchResponse}
     */
    getSimilarDocuments(documentId, opts) {
      return this.getSimilarDocumentsWithHttpInfo(documentId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Adds an interaction between the user and the document.
     * Use this method to register an interaction between a user and a document. Currently, we only support a `Positive` interaction, which is equivalent to a user who \"likes\" a certain document. For web sites, consider triggering this method whenever a certain document url loads, preferably after the user spent some time on the page, in order to prevent false positives. For apps, consider implementing a \"like\" button, where the on click then triggers this method.
     * @param {String} userId Id of the user
     * @param {module:model/UserInteractionRequest} userInteractionRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateUserInteractionsWithHttpInfo(userId, userInteractionRequest) {
      let postBody = userInteractionRequest;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateUserInteractions");
      }
      // verify the required parameter 'userInteractionRequest' is set
      if (userInteractionRequest === undefined || userInteractionRequest === null) {
        throw new Error("Missing the required parameter 'userInteractionRequest' when calling updateUserInteractions");
      }

      let pathParams = {
        'user_id': userId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/users/{user_id}/interactions', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Adds an interaction between the user and the document.
     * Use this method to register an interaction between a user and a document. Currently, we only support a `Positive` interaction, which is equivalent to a user who \"likes\" a certain document. For web sites, consider triggering this method whenever a certain document url loads, preferably after the user spent some time on the page, in order to prevent false positives. For apps, consider implementing a \"like\" button, where the on click then triggers this method.
     * @param {String} userId Id of the user
     * @param {module:model/UserInteractionRequest} userInteractionRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateUserInteractions(userId, userInteractionRequest) {
      return this.updateUserInteractionsWithHttpInfo(userId, userInteractionRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
