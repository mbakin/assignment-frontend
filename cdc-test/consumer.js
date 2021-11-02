/* eslint-disable no-undef */
const path = require("path");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { Pact } = require("@pact-foundation/pact");
const expect = chai.expect;

var defaultPort = 1234;

describe("Pact", () => {
  const provider = new Pact({
    consumer: "frontend",
    provider: "backend",
    port: defaultPort,
    log: path.resolve(process.cwd(), "logs", "pact.log"),
    dir: path.resolve(process.cwd(), "pacts"),
    logLevel: "INFO",
  });

  // eslint-disable-next-line no-undef
  before(() => provider.setup()); 
  after(() => provider.finalize());
  afterEach(() => provider.verify());

  var EXPECTED_BODY = [
    {
      title: "Buy some milk",
      complete: false,
      _id: "6181955862fe4563597abcfc",
      createdAt: "2021-11-02T19:45:28.727Z",
      updatedAt: "2021-11-02T19:45:28.727Z",
      __v: 0
    },
  ];

  describe("GET request with correct parameters", () => {
    before(() =>
      provider.addInteraction({
        state: "A list of todos with one todo item",
        uponReceiving: "a request for all the todo items",
        withRequest: {
          method: "GET",
          path: "/api/todos",
          headers: { "Content-Type": "application/json" },
        },
        willRespondWith: {
          status: 200,
          body: EXPECTED_BODY,
        },
      })
    );

    it("generates a list of todo items", async () => {
      await chai
        .request(`localhost:${defaultPort}`)
        .get("/api/todos")
        .set("Content-Type", "application/json")
        .then(function (res) {
          expect(res).to.have.status(200);
          expect(res.text).to.deep.equal(JSON.stringify(EXPECTED_BODY));
        });
    });
  });

  describe("POST request to add a new todo item", () => {
    before(() =>
      provider.addInteraction({
        state: "A new todo item is added",
        uponReceiving: "a request to add a new todo item",
        withRequest: {
          method: "POST",
          path: "/api/todos",
          headers: { "Content-Type": "application/json" },
          body: { text: "Buy some milk" },
        },
        willRespondWith: {
          status: 202,
          headers: { "Content-Type": "application/json" },
        },
      })
    );

    it("properly gets the request for creating a new todo item", async () => {
      await chai
        .request(`localhost:${defaultPort}`)
        .post("/api/todos")
        .set("Content-Type", "application/json")
        .send({ text: "Buy some milk" })
        .then(function (res) {
          expect(res).to.have.status(202);
        });
    });
  });
});