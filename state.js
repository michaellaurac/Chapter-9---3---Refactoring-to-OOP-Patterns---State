class Person {
  constructor (binaryKnowledge) {
    this.binaryKnowledge = Object.create(Object.assign({ person: this }, binaryKnowledge));
  };

  change (binaryKnowledge) {
    this.binaryKnowledge = Object.create(Object.assign({ person: this }, binaryKnowledge));
  };
};

const binaryAwareness = {
  read (number) { return Number("0b" + number); },
  and (numberOne, numberTwo) { return numberOne & numberTwo; },
  xor (numberOne, numberTwo) { return numberOne ^ numberTwo; },
  forget () { this.person.change(binaryObliviousness); }
};

const binaryObliviousness = {
  read (number) { return number; },
  and (numberOne, numberTwo) { return "unknown"; },
  xor (numberOne, numberTwo) { return "unknown"; },
  learn () { this.person.change(binaryAwareness); }
};

module.exports = { Person, binaryAwareness, binaryObliviousness };
