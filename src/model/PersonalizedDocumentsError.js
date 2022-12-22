/**
 * Front Office API
 * # Front Office The system identifies a user with only an id. There are two main endpoints: one that allows registering an interaction between a user and a document (a user clicked or liked a document), and one to retrieve a personalized set of documents for the user. The system needs a few user interactions with documents before it can generate a personalized list.  # Auth To authenticate with the API, a token will be provided.
 *
 * The version of the OpenAPI document: 1.0.0-rc6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import GenericError from './GenericError';
import PersonalizedDocumentsErrorAllOf from './PersonalizedDocumentsErrorAllOf';

/**
 * The PersonalizedDocumentsError model module.
 * @module model/PersonalizedDocumentsError
 * @version 1.0.14
 */
class PersonalizedDocumentsError {
    /**
     * Constructs a new <code>PersonalizedDocumentsError</code>.
     * @alias module:model/PersonalizedDocumentsError
     * @implements module:model/GenericError
     * @implements module:model/PersonalizedDocumentsErrorAllOf
     * @param kind {module:model/PersonalizedDocumentsError.KindEnum} 
     */
    constructor(kind) { 
        GenericError.initialize(this);PersonalizedDocumentsErrorAllOf.initialize(this, kind);
        PersonalizedDocumentsError.initialize(this, kind);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, kind) { 
        obj['kind'] = kind;
    }

    /**
     * Constructs a <code>PersonalizedDocumentsError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PersonalizedDocumentsError} obj Optional instance to populate.
     * @return {module:model/PersonalizedDocumentsError} The populated <code>PersonalizedDocumentsError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PersonalizedDocumentsError();
            GenericError.constructFromObject(data, obj);
            PersonalizedDocumentsErrorAllOf.constructFromObject(data, obj);

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
     * Validates the JSON data with respect to <code>PersonalizedDocumentsError</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PersonalizedDocumentsError</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PersonalizedDocumentsError.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
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

PersonalizedDocumentsError.RequiredProperties = ["kind"];

/**
 * Request ID optionally generated from the service. It can be communicated to xayn to help debugging.
 * @member {String} request_id
 */
PersonalizedDocumentsError.prototype['request_id'] = undefined;

/**
 * @member {module:model/PersonalizedDocumentsError.KindEnum} kind
 */
PersonalizedDocumentsError.prototype['kind'] = undefined;

/**
 * Additional error details. Might differ depending on debug options.
 * @member {Object} details
 */
PersonalizedDocumentsError.prototype['details'] = undefined;


// Implement GenericError interface:
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
// Implement PersonalizedDocumentsErrorAllOf interface:
/**
 * @member {module:model/PersonalizedDocumentsErrorAllOf.KindEnum} kind
 */
PersonalizedDocumentsErrorAllOf.prototype['kind'] = undefined;



/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
PersonalizedDocumentsError['KindEnum'] = {

    /**
     * value: "NotEnoughInteractions"
     * @const
     */
    "NotEnoughInteractions": "NotEnoughInteractions"
};



export default PersonalizedDocumentsError;

