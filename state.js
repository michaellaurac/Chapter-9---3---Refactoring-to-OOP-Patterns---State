class Person {
  constructor (readKnowledge, andKnowledge, xorKnowledge) {
    this.read = readKnowledge;
    this.and = andKnowledge;
    this.xor = xorKnowledge;
  };

  read (number) { return this.whatIs(number); };
};

const binary = {
  readAware (number) { return Number("0b" + number); },
  readOblivious (number) { return number; },
  andAware (numberOne, numberTwo) { return numberOne & numberTwo; },
  andOblivious (numberOne, numberTwo) { return "unknown"; },
  xorAware (numberOne, numberTwo) { return numberOne ^ numberTwo; },
  xorOblivious (numberOne, numberTwo) { return "unknown"; }
};

module.exports = { Person, binary };
