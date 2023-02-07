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
import UserInteractionData from './UserInteractionData';

/**
 * The UserInteractionRequest model module.
 * @module model/UserInteractionRequest
 * @version 1.0.22
 */
class UserInteractionRequest {
    /**
     * Constructs a new <code>UserInteractionRequest</code>.
     * @alias module:model/UserInteractionRequest
     * @param documents {Array.<module:model/UserInteractionData>} 
     */
    constructor(documents) { 
        
        UserInteractionRequest.initialize(this, documents);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, documents) { 
        obj['documents'] = documents;
    }

    /**
     * Constructs a <code>UserInteractionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserInteractionRequest} obj Optional instance to populate.
     * @return {module:model/UserInteractionRequest} The populated <code>UserInteractionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserInteractionRequest();

            if (data.hasOwnProperty('documents')) {
                obj['documents'] = ApiClient.convertToType(data['documents'], [UserInteractionData]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserInteractionRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserInteractionRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UserInteractionRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['documents']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['documents'])) {
                throw new Error("Expected the field `documents` to be an array in the JSON data but got " + data['documents']);
            }
            // validate the optional field `documents` (array)
            for (const item of data['documents']) {
                UserInteractionData.validateJsonObject(item);
            };
        }

        return true;
    }


}

UserInteractionRequest.RequiredProperties = ["documents"];

/**
 * @member {Array.<module:model/UserInteractionData>} documents
 */
UserInteractionRequest.prototype['documents'] = undefined;






export default UserInteractionRequest;

