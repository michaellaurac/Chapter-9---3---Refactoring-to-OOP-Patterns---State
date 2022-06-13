const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

/* eslint-env mocha */

const assert = require("assert").strict;
const { Person, binaryAwareness, binaryObliviousness } = require("./state.js");

describe("tests run on the 'state.js' file:", () => {
  // setup test
  it("verifies the test file name", () => {
    assert.strictEqual(fileName(), "state_test.js");
  });
  // initialisation
  const personOne = new Person(binaryAwareness);
  const personTwo = new Person(binaryObliviousness);
  // functional tests
  it("checks that '10' is read as '2' for a binary read aware such as personOne", () => {
    assert.strictEqual(personOne.binaryKnowledge.read(10), 2);
  });
  it("checks that '10' is read as '10' for a binary read oblivious such as personTwo", () => {
    assert.strictEqual(personTwo.binaryKnowledge.read(10), 10);
  });
  it("checks that '2 & 3' yields '2' for a binary and knower such as personOne", () => {
    assert.strictEqual(personOne.binaryKnowledge.and(2, 3), 2);
  });
  it("checks that '2 & 3' yields 'unknown' for a binary and oblivious such as personTwo", () => {
    assert.strictEqual(personTwo.binaryKnowledge.and(2, 3), "unknown");
  });
  it("checks that '2 ^ 3' yields '1' for a binary xor knower such as personOne", () => {
    assert.strictEqual(personOne.binaryKnowledge.xor(2, 3), 1);
  });
  it("checks that '2 ^ 3' yields 'unknown' for a binary xor oblivious such as personTwo", () => {
    assert.strictEqual(personTwo.binaryKnowledge.xor(2, 3), "unknown");
  });
  // state change
  const personThree = new Person(binaryAwareness);
  const personFour = new Person(binaryObliviousness);
  personThree.binaryKnowledge.forget();
  personFour.binaryKnowledge.learn();

  // functional tests
  it("checks that '10' is read as '2' for a binary read aware such as personFour", () => {
    assert.strictEqual(personFour.binaryKnowledge.read(10), 2);
  });
  it("checks that '10' is read as '10' for a binary read oblivious such as personThree", () => {
    assert.strictEqual(personThree.binaryKnowledge.read(10), 10);
  });
  it("checks that '2 & 3' yields '2' for a binary and knower such as personFour", () => {
    assert.strictEqual(personFour.binaryKnowledge.and(2, 3), 2);
  });
  it("checks that '2 & 3' yields 'unknown' for a binary and oblivious such as personThree", () => {
    assert.strictEqual(personThree.binaryKnowledge.and(2, 3), "unknown");
  });
  it("checks that '2 ^ 3' yields '1' for a binary xor knower such as personFour", () => {
    assert.strictEqual(personFour.binaryKnowledge.xor(2, 3), 1);
  });
  it("checks that '2 ^ 3' yields 'unknown' for a binary xor oblivious such as personThree", () => {
    assert.strictEqual(personThree.binaryKnowledge.xor(2, 3), "unknown");
  });
});
