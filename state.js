class Person {
  constructor (binaryKnowledge) {
    this.binaryKnowledge = binaryKnowledge;
  };
};

const binaryAwareness = {
  read (number) { return Number("0b" + number); },
  and (numberOne, numberTwo) { return numberOne & numberTwo; },
  xor (numberOne, numberTwo) { return numberOne ^ numberTwo; }
};

const binaryObliviousness = {
  read (number) { return number; },
  and (numberOne, numberTwo) { return "unknown"; },
  xor (numberOne, numberTwo) { return "unknown"; }
};

module.exports = { Person, binaryAwareness, binaryObliviousness };
