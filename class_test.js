const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

/* eslint-env mocha */

const wish = require("wish");
const Class = require("./class.js");

describe("tests run on the 'class.js' file:", () => {
  // setup test
  it("verifies the test file name", () => {
    wish(fileName() === "class_test.js");
  });
  // functional tests
  console.log(Class);
});
