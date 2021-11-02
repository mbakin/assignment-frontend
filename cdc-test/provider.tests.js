/* eslint-disable no-undef */
const { Verifier } = require("@pact-foundation/pact");
const path = require("path");
const packageJson = require("../package.json");

let opts = {
  providerBaseUrl: "http://localhost:1234",
  provider: "backend",
  providerVersion: packageJson.version,
  pactUrls: [path.resolve(process.cwd(), "pacts", "frontend-backend.json")],
};

new Verifier()
  .verifyProvider(opts)
  .then(function () {
    console.log("Pacts successfully verified!");
  })
  .catch((e) => {
    console.log("ERROR:  ", e);
  });
// I checked Stackoverflow, github issues, microsoft docs but i cant' fix this error.
// ERROR:   Error: C:/Users/mehme/Desktop/testTodo/client/cdc-test/node_modules/@pact-foundation/pact-node/standalone/win32-1.88.77/pact/lib/vendor/ruby/2.2.0/gems/pact-provider-verifier-1.36.0/lib/pact/provider_verifier/app.rb:4:in
// `require': cannot load such file -- pact/provider_verifier/provider_states/remove_provider_states_header_middleware (LoadError)

// I tried Enable Win32 long paths, but i couldn't fix this error.