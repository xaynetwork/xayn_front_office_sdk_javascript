/**
 * Personalization API For User Management
 * # User management The system identifies a user with only an id. There are two main endpoints: one that allows registering an interaction between a user and a document (a user clicked or liked a document), and one to retrieve a personalized set of documents for the user. The system needs a few user interactions with documents before it can generate a personalized list.  # Auth To authenticate with the API, a token will be provided.
 *
 * The version of the OpenAPI document: 1.0.0-rc5
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD.
    define(["expect.js", process.cwd() + "/src/index"], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require("expect.js"), require(process.cwd() + "/src/index"));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.XaynFrontOfficeSdk);
  }
})(this, function (expect, XaynFrontOfficeSdk) {
  "use strict";

  var api;

  beforeEach(function () {
    let client = new XaynFrontOfficeSdk.ApiClient(
      process.env.npm_config_endpoint
    );
    let api_key = client.authentications["ApiKeyAuth"];
    api_key.apiKey = process.env.npm_config_token;

    api = new XaynFrontOfficeSdk.FrontOfficeApi(client);
  });

  describe("FrontOfficeApi", function () {
    describe("documentInteraction", function () {
      it("should call documentInteraction successfully", function (done) {
        api
          .documentInteraction("xayn_test_user", {
            userInteractionRequest: {
              documents: [
                {
                  id: "test_A",
                  type: "positive",
                },
                {
                  id: "test_B",
                  type: "positive",
                },
              ],
            },
          })
          .then((result) => {
            expect(result).to.be(null);
            done();
          });
      });
    });
    describe("getPersonalizedDocuments", function () {
      it("should call getPersonalizedDocuments successfully", function (done) {
        api
          .getPersonalizedDocuments("xayn_test_user", {
            count: 10,
          })
          .then((result) => {
            expect(result.documents.length).to.be(0);
            done();
          })
          .catch((error) => {
            expect(error.body.kind).to.be("NotEnoughInteractions");
            done();
          });
      });
    });
  });
});
