const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

/* eslint-env mocha */

const wish = require("wish");
const { Person, binaryAwareness, binaryObliviousness } = require("./state.js");

describe("tests run on the 'state.js' file:", () => {
  // setup test
  it("verifies the test file name", () => {
    wish(fileName() === "state_test.js");
  });
  // initialisation
  const personOne = new Person(binaryAwareness);
  const personTwo = new Person(binaryObliviousness);
  // functional tests
  it("checks that '10' is read as '2' for a binary read aware", () => {
    wish(personOne.binaryKnowledge.read(10) === 2);
  });
  it("checks that '10' is read as '10' for a binary read oblivious", () => {
    wish(personTwo.binaryKnowledge.read(10) === 10);
  });
  it("checks that '2 & 3' yields '2' for a binary and knower", () => {
    wish(personOne.binaryKnowledge.and(2, 3) === 2);
  });
  it("checks that '2 & 3' yields 'unknown' for a binary and oblivious", () => {
    wish(personTwo.binaryKnowledge.and(2, 3) === "unknown");
  });
  it("checks that '2 ^ 3' yields '1' for a binary xor knower", () => {
    wish(personOne.binaryKnowledge.xor(2, 3) === 1);
  });
  it("checks that '2 ^ 3' yields 'unknown' for a binary xor oblivious", () => {
    wish(personTwo.binaryKnowledge.xor(2, 3) === "unknown");
  });
});
