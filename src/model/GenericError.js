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

import ApiClient from '../ApiClient';

/**
 * The GenericError model module.
 * @module model/GenericError
 * @version 1.0.20
 */
class GenericError {
    /**
     * Constructs a new <code>GenericError</code>.
     * @alias module:model/GenericError
     */
    constructor() { 
        
        GenericError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GenericError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenericError} obj Optional instance to populate.
     * @return {module:model/GenericError} The populated <code>GenericError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GenericError();

            if (data.hasOwnProperty('request_id')) {
                obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GenericError</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GenericError</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['request_id'] && !(typeof data['request_id'] === 'string' || data['request_id'] instanceof String)) {
            throw new Error("Expected the field `request_id` to be a primitive type in the JSON string but got " + data['request_id']);
        }
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }

        return true;
    }


}



/**
 * Request ID optionally generated from the service. It can be communicated to xayn to help debugging.
 * @member {String} request_id
 */
GenericError.prototype['request_id'] = undefined;

/**
 * What kind of error this is.
 * @member {String} kind
 */
GenericError.prototype['kind'] = undefined;

/**
 * Additional error details. Might differ depending on debug options.
 * @member {Object} details
 */
GenericError.prototype['details'] = undefined;






export default GenericError;

