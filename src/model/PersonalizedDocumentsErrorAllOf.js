/**
 * Front Office API
 * # Front Office The system identifies a user with only an id. There are two main endpoints: one that allows registering an interaction between a user and a document (a user clicked or liked a document), and one to retrieve a personalized set of documents for the user. The system needs a few user interactions with documents before it can generate a personalized list.  # Auth To authenticate with the API, a token will be provided.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PersonalizedDocumentsErrorAllOf model module.
 * @module model/PersonalizedDocumentsErrorAllOf
 * @version 1.0.12
 */
class PersonalizedDocumentsErrorAllOf {
    /**
     * Constructs a new <code>PersonalizedDocumentsErrorAllOf</code>.
     * @alias module:model/PersonalizedDocumentsErrorAllOf
     * @param kind {module:model/PersonalizedDocumentsErrorAllOf.KindEnum} 
     */
    constructor(kind) { 
        
        PersonalizedDocumentsErrorAllOf.initialize(this, kind);
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
     * Constructs a <code>PersonalizedDocumentsErrorAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PersonalizedDocumentsErrorAllOf} obj Optional instance to populate.
     * @return {module:model/PersonalizedDocumentsErrorAllOf} The populated <code>PersonalizedDocumentsErrorAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PersonalizedDocumentsErrorAllOf();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PersonalizedDocumentsErrorAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PersonalizedDocumentsErrorAllOf</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PersonalizedDocumentsErrorAllOf.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }

        return true;
    }


}

PersonalizedDocumentsErrorAllOf.RequiredProperties = ["kind"];

/**
 * @member {module:model/PersonalizedDocumentsErrorAllOf.KindEnum} kind
 */
PersonalizedDocumentsErrorAllOf.prototype['kind'] = undefined;





/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
PersonalizedDocumentsErrorAllOf['KindEnum'] = {

    /**
     * value: "NotEnoughInteractions"
     * @const
     */
    "NotEnoughInteractions": "NotEnoughInteractions"
};



export default PersonalizedDocumentsErrorAllOf;

