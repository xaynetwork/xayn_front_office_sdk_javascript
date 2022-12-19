# xayn_front_office_sdk

XaynFrontOfficeSdk - JavaScript client for xayn_front_office_sdk
# Front Office
The system identifies a user with only an id.
There are two main endpoints: one that allows registering an interaction between a user and a document (a user clicked or liked a document), and one to retrieve a personalized set of documents for the user. The system needs a few user interactions with documents before it can generate a personalized list.

# Auth
To authenticate with the API, a token will be provided.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.12
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install xayn_front_office_sdk --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your xayn_front_office_sdk from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var XaynFrontOfficeSdk = require('xayn_front_office_sdk');

var defaultClient = XaynFrontOfficeSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix['authorizationToken'] = "Token"

var api = new XaynFrontOfficeSdk.FrontOfficeApi()
var userId = "userId_example"; // {String} Id of the user
var opts = {
  'userInteractionRequest': new XaynFrontOfficeSdk.UserInteractionRequest() // {UserInteractionRequest} 
};
api.documentInteraction(userId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*XaynFrontOfficeSdk.FrontOfficeApi* | [**documentInteraction**](docs/FrontOfficeApi.md#documentInteraction) | **PATCH** /users/{user_id}/interactions | Add interaction between a user and a document
*XaynFrontOfficeSdk.FrontOfficeApi* | [**getPersonalizedDocuments**](docs/FrontOfficeApi.md#getPersonalizedDocuments) | **GET** /users/{user_id}/personalized_documents | Get personalized documents for the user


## Documentation for Models

 - [XaynFrontOfficeSdk.BaseError](docs/BaseError.md)
 - [XaynFrontOfficeSdk.PersonalizedDocumentData](docs/PersonalizedDocumentData.md)
 - [XaynFrontOfficeSdk.PersonalizedDocumentsError](docs/PersonalizedDocumentsError.md)
 - [XaynFrontOfficeSdk.PersonalizedDocumentsErrorAllOf](docs/PersonalizedDocumentsErrorAllOf.md)
 - [XaynFrontOfficeSdk.PersonalizedDocumentsResponse](docs/PersonalizedDocumentsResponse.md)
 - [XaynFrontOfficeSdk.UserInteractionData](docs/UserInteractionData.md)
 - [XaynFrontOfficeSdk.UserInteractionError](docs/UserInteractionError.md)
 - [XaynFrontOfficeSdk.UserInteractionErrorAllOf](docs/UserInteractionErrorAllOf.md)
 - [XaynFrontOfficeSdk.UserInteractionRequest](docs/UserInteractionRequest.md)
 - [XaynFrontOfficeSdk.UserInteractionType](docs/UserInteractionType.md)


## Documentation for Authorization



### ApiKeyAuth


- **Type**: API key
- **API key parameter name**: authorizationToken
- **Location**: HTTP header

