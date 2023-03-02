/**
 * Front Office API
 * # Front Office The front office is typically used within front-end apps, for example a website or a mobile application. With this SDK, you can handle interactions with documents and request a list of personalized documents.  ## User Each method requires a `user_id`. From our perspective, a `user_id` is simply required to group interactions together. We don't need to know who that user is, so it is preferred to create this `user_id` in a privacy-preserving way. For example, create a hash method which transforms your user into an ID hash.  ## Document A document here is represented by its `id` and optional `properties`. In order to display a document in an interface, it's preferred to use `properties`, which is an arbitrary collection of values. For example, it could contain an image url, a full article url, the publication date, the author or much more. The properties that were added when the document was submitted to us, are just mirrored here.  ## Auth The API requires an authenticationToken when used. Please see further down in this README.md file, or refer to the test included in this SDK's codebase, on how to set this token correctly. \\
 *
 * The version of the OpenAPI document: 1.0.0-rc10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DocumentProperties model module.
 * @module model/DocumentProperties
 * @version 1.0.26
 */
class DocumentProperties {
    /**
     * Constructs a new <code>DocumentProperties</code>.
     * Mostly arbitrary properties that can be attached to a document. A key must be a valid &#x60;DocumentPropertyId&#x60;.
     * @alias module:model/DocumentProperties
     * @extends Object
     */
    constructor() { 
        
        DocumentProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DocumentProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentProperties} obj Optional instance to populate.
     * @return {module:model/DocumentProperties} The populated <code>DocumentProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentProperties();

            ApiClient.constructFromObject(data, obj, 'Object');
            

            if (data.hasOwnProperty('publication_date')) {
                obj['publication_date'] = ApiClient.convertToType(data['publication_date'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DocumentProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DocumentProperties</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * A RFC3339 compatible date-time  - can be in the future - will be converted to and then stored as UTC - sub-second resolution is not guaranteed. - while `properties.publication_date` is in the future the document will not be   returned for personalized documents, once it is no longer in the future it will   automatically be considered for personalization from then on 
 * @member {Date} publication_date
 */
DocumentProperties.prototype['publication_date'] = undefined;






export default DocumentProperties;

