console.log("==== Atbash Cipher Tests ====");

const tests = [
  {
    input: "CapitaL letters",
    expected: "ovggvih XzkrgzO"
  },
  {
    input: "abc def",
    expected: "wvu zyx"
  },
  {
    input: "n m",
    expected: "n m"
  },
  {
    input: "HELLO world",
    expected: "dliow SVOOL"
  }
];


for (const { name, input, expected } of tests) {
  const output = atBashCipher(input);

  console.log(`TEST: ${name}`);
  console.log("input:   ", input);
  console.log("output:  ", output);
  console.log("expected:", expected);
  console.log("pass:", output === expected);
  console.log("-----------------------------");
}
