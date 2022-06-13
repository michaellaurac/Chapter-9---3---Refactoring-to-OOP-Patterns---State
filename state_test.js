const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

/* eslint-env mocha */

const assert = require("assert");
const { Person, binaryAwareness, binaryObliviousness } = require("./state.js");

describe("tests run on the 'state.js' file:", () => {
  // setup test
  it("verifies the test file name", () => {
    assert(fileName(), "state_test.js");
  });
  // initialisation
  const personOne = new Person(binaryAwareness);
  const personTwo = new Person(binaryObliviousness);
  // functional tests
  it("checks that '10' is read as '2' for a binary read aware such as personOne", () => {
    assert(personOne.binaryKnowledge.read(10), 2);
  });
  it("checks that '10' is read as '10' for a binary read oblivious such as personTwo", () => {
    assert(personTwo.binaryKnowledge.read(10), 10);
  });
  it("checks that '2 & 3' yields '2' for a binary and knower such as personOne", () => {
    assert(personOne.binaryKnowledge.and(2, 3), 2);
  });
  it("checks that '2 & 3' yields 'unknown' for a binary and oblivious such as personTwo", () => {
    assert(personTwo.binaryKnowledge.and(2, 3), "unknown");
  });
  it("checks that '2 ^ 3' yields '1' for a binary xor knower such as personOne", () => {
    assert(personOne.binaryKnowledge.xor(2, 3), 1);
  });
  it("checks that '2 ^ 3' yields 'unknown' for a binary xor oblivious such as personTwo", () => {
    assert(personTwo.binaryKnowledge.xor(2, 3), "unknown");
  });
  // state change
  personOne.binaryKnowledge.forget();
  personTwo.binaryKnowledge.learn();

  console.log(personOne.binaryKnowledge.read(10));
  // functional tests
  it("checks that '10' is read as '2' for a binary read aware such as personTwo", () => {
    assert(personTwo.binaryKnowledge.read(10), 2);
  });
  it("checks that '10' is read as '10' for a binary read oblivious such as personOne", () => {
    assert(personOne.binaryKnowledge.read(10), 10);
  });
  it("checks that '2 & 3' yields '2' for a binary and knower such as personTwo", () => {
    assert(personTwo.binaryKnowledge.and(2, 3), 2);
  });
  it("checks that '2 & 3' yields 'unknown' for a binary and oblivious such as personOne", () => {
    assert(personOne.binaryKnowledge.and(2, 3), "unknown");
  });
  it("checks that '2 ^ 3' yields '1' for a binary xor knower such as personTwo", () => {
    assert(personTwo.binaryKnowledge.xor(2, 3), 1);
  });
  it("checks that '2 ^ 3' yields 'unknown' for a binary xor oblivious such as personOne", () => {
    assert(personOne.binaryKnowledge.xor(2, 3), "unknown");
  });
});
