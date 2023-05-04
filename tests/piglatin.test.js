const translate = require("../src/piglatin.js");

describe("5 tests with words starting with vowels.", () => {
  test("translate('apple') → 'appleway'", () => {
    const result = translate("apple");
    expect(result).toBe("appleway");
  });
  test("translate('else') → 'elseway'", () => {
    const result = translate("else");
    expect(result).toBe("elseway");
  });
  test("translate('igloo') → 'iglooway'", () => {
    const result = translate("igloo");
    expect(result).toBe("iglooway");
  });
  test("translate('octopus') → 'octopusway'", () => {
    const result = translate("octopus");
    expect(result).toBe("octopusway");
  });
  test("translate('umbrella') → 'umbrellaway'", () => {
    const result = translate("umbrella");
    expect(result).toBe("umbrellaway");
  });
});

describe("At least two (2) tests for words starting with one consonant", () => {
  test("translate('giraffe') → 'iraffegay'", () => {
    const result = translate("giraffe");
    expect(result).toBe("iraffegay");
  });
  test("translate('hair') → 'airhay'", () => {
    const result = translate("hair");
    expect(result).toBe("airhay");
  });
});

describe("At least one (1) test for words starting with two consonants.", () => {
  test("translate('phone') → 'onephay'", () => {
    const result = translate("phone");
    expect(result).toBe("onephay");
  });
});
