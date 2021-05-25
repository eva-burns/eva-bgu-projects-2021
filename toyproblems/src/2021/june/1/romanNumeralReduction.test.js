const romanNumeralReduction = require("./romanNumeralReduction");

describe("romanNumeralReduction tests", () => {
  it("should pass first test", () => {
    expect(romanNumeralReduction("LLLXXXVVVV")).toBe("CC");
  });

  it("should pass second test", () => {
    expect(romanNumeralReduction("XXXVVIIIIIIIIII")).toBe("L");
  });

  it("should pass third test", () => {
    expect(romanNumeralReduction("DDLL")).toBe("MC");
  });

  it("should pass fourth test", () => {
    expect(romanNumeralReduction("CCCCLL")).toBe("D");
  });

  it("should pass fifth test", () => {
    expect(romanNumeralReduction("CCCCCCCCLLLL")).toBe("M");
  });

  it("should pass sixth test", () => {
    expect(romanNumeralReduction("IIIII")).toBe("V");
  });

  it("should pass seventh test", () => {
    expect(romanNumeralReduction("IIIIIIIIII")).toBe("X");
  });

  it("should pass eighth test", () => {
    expect(romanNumeralReduction("XXXVVVIIIII")).toBe("L");
  });

  it("should pass ninth test", () => {
    expect(romanNumeralReduction("LXXXVVVIIIII")).toBe("C");
  });
});
