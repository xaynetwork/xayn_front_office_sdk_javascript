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


import ApiClient from './ApiClient';
import DocumentProperties from './model/DocumentProperties';
import GenericError from './model/GenericError';
import PersonalizedDocumentData from './model/PersonalizedDocumentData';
import PersonalizedDocumentsError from './model/PersonalizedDocumentsError';
import PersonalizedDocumentsErrorAllOf from './model/PersonalizedDocumentsErrorAllOf';
import PersonalizedDocumentsResponse from './model/PersonalizedDocumentsResponse';
import SemanticSearchResponse from './model/SemanticSearchResponse';
import UserInteractionData from './model/UserInteractionData';
import UserInteractionError from './model/UserInteractionError';
import UserInteractionErrorAllOf from './model/UserInteractionErrorAllOf';
import UserInteractionRequest from './model/UserInteractionRequest';
import UserInteractionType from './model/UserInteractionType';
import FrontOfficeApi from './com.xayn.frontoffice/FrontOfficeApi';


/**
* # Front Office The front office is typically used within front-end apps, for example a website or a mobile application. With this SDK, you can handle interactions with documents and request a list of personalized documents.  ## User Each method requires a &#x60;user_id&#x60;. From our perspective, a &#x60;user_id&#x60; is simply required to group interactions together. We don&#39;t need to know who that user is, so it is preferred to create this &#x60;user_id&#x60; in a privacy-preserving way. For example, create a hash method which transforms your user into an ID hash.  ## Document A document here is represented by its &#x60;id&#x60; and optional &#x60;properties&#x60;. In order to display a document in an interface, it&#39;s preferred to use &#x60;properties&#x60;, which is an arbitrary collection of values. For example, it could contain an image url, a full article url, the publication date, the author or much more. The properties that were added when the document was submitted to us, are just mirrored here.  ## Auth The API requires an authenticationToken when used. Please see further down in this README.md file, or refer to the test included in this SDK&#39;s codebase, on how to set this token correctly. \\.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var XaynFrontOfficeSdk = require('index'); // See note below*.
* var xxxSvc = new XaynFrontOfficeSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new XaynFrontOfficeSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new XaynFrontOfficeSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new XaynFrontOfficeSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.21
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The DocumentProperties model constructor.
     * @property {module:model/DocumentProperties}
     */
    DocumentProperties,

    /**
     * The GenericError model constructor.
     * @property {module:model/GenericError}
     */
    GenericError,

    /**
     * The PersonalizedDocumentData model constructor.
     * @property {module:model/PersonalizedDocumentData}
     */
    PersonalizedDocumentData,

    /**
     * The PersonalizedDocumentsError model constructor.
     * @property {module:model/PersonalizedDocumentsError}
     */
    PersonalizedDocumentsError,

    /**
     * The PersonalizedDocumentsErrorAllOf model constructor.
     * @property {module:model/PersonalizedDocumentsErrorAllOf}
     */
    PersonalizedDocumentsErrorAllOf,

    /**
     * The PersonalizedDocumentsResponse model constructor.
     * @property {module:model/PersonalizedDocumentsResponse}
     */
    PersonalizedDocumentsResponse,

    /**
     * The SemanticSearchResponse model constructor.
     * @property {module:model/SemanticSearchResponse}
     */
    SemanticSearchResponse,

    /**
     * The UserInteractionData model constructor.
     * @property {module:model/UserInteractionData}
     */
    UserInteractionData,

    /**
     * The UserInteractionError model constructor.
     * @property {module:model/UserInteractionError}
     */
    UserInteractionError,

    /**
     * The UserInteractionErrorAllOf model constructor.
     * @property {module:model/UserInteractionErrorAllOf}
     */
    UserInteractionErrorAllOf,

    /**
     * The UserInteractionRequest model constructor.
     * @property {module:model/UserInteractionRequest}
     */
    UserInteractionRequest,

    /**
     * The UserInteractionType model constructor.
     * @property {module:model/UserInteractionType}
     */
    UserInteractionType,

    /**
    * The FrontOfficeApi service constructor.
    * @property {module:com.xayn.frontoffice/FrontOfficeApi}
    */
    FrontOfficeApi
};
