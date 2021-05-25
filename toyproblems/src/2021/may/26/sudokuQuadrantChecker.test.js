const sudokuQuadrantChecker = require("./sudokuQuadrantChecker");

describe("sudokuQuadrantChecker tests", () => {
  it("should pass first test", () => {
    expect(
      sudokuQuadrantChecker([
        "(1,2,3,4,5,6,7,8,1)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(1,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
      ])
    ).toBe("1,3,4");
  });

  it("should pass second test", () => {
    expect(
      sudokuQuadrantChecker([
        "(1,2,3,4,5,6,7,8,9)",
        "(x,x,x,x,x,x,x,x,x)",
        "(6,x,5,x,3,x,x,4,x)",
        "(2,x,1,1,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,9)",
      ])
    ).toBe("3,4,5,9");
  });

  it("should pass third test", () => {
    expect(
      sudokuQuadrantChecker([
        "(1,2,3,4,5,6,7,8,9)",
        "(x,x,x,x,x,x,x,x,x)",
        "(6,x,5,x,3,x,x,4,x)",
        "(2,x,1,1,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
      ])
    ).toBe("4,5");
  });

  it("should pass fourth test", () => {
    expect(
      sudokuQuadrantChecker([
        "(1,2,3,4,5,6,7,8,9)",
        "(x,x,x,x,x,x,x,x,x)",
        "(6,x,5,x,3,x,x,4,x)",
        "(2,x,1,5,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,8)",
      ])
    ).toBe("legal");
  });

  it("should pass fifth test", () => {
    expect(
      sudokuQuadrantChecker([
        "(1,2,3,4,5,6,7,8,9)",
        "(x,x,x,x,x,x,x,x,x)",
        "(6,x,5,x,3,x,x,4,x)",
        "(2,x,1,5,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,4)",
        "(9,1,2,3,4,5,6,7,8)",
      ])
    ).toBe("legal");
  });

  it("should pass sixth test", () => {
    expect(
      sudokuQuadrantChecker([
        "(1,2,3,4,5,6,7,8,9)",
        "(x,x,x,x,x,x,x,x,x)",
        "(6,x,5,x,3,x,x,4,x)",
        "(2,x,1,5,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,9)",
        "(9,1,2,3,4,5,6,7,8)",
      ])
    ).toBe("3,9");
  });

  it("should pass seventh test", () => {
    expect(
      sudokuQuadrantChecker([
        "(1,2,3,4,5,6,7,8,9)",
        "(x,x,x,x,x,x,x,x,x)",
        "(6,x,5,x,3,x,x,4,x)",
        "(2,x,1,5,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,9)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,9)",
        "(9,1,2,3,4,5,6,7,8)",
      ])
    ).toBe("3,6,9");
  });

  it("should pass eighth test", () => {
    expect(
      sudokuQuadrantChecker([
        "(9,2,3,4,5,6,7,8,9)",
        "(x,x,x,x,x,x,x,x,x)",
        "(6,x,5,x,3,x,x,4,x)",
        "(2,x,1,5,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,1)",
        "(x,x,x,x,x,x,x,x,2)",
        "(9,1,2,3,4,5,6,7,8)",
      ])
    ).toBe("1,3,7");
  });

  it("should pass ninth test", () => {
    expect(
      sudokuQuadrantChecker([
        "(1,2,3,4,5,6,7,8,9)",
        "(4,5,6,x,x,x,x,x,x)",
        "(7,8,9,x,x,x,x,x,x)",
        "(2,3,4,x,x,x,x,x,x)",
        "(5,6,7,x,x,x,x,x,x)",
        "(8,9,1,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,1)",
      ])
    ).toBe("legal");
  });

  it("should pass tenth test", () => {
    expect(
      sudokuQuadrantChecker([
        "(1,2,3,4,5,6,7,8,9)",
        "(4,5,6,1,2,3,x,x,x)",
        "(7,8,9,x,x,6,x,x,x)",
        "(2,3,4,x,x,x,x,x,x)",
        "(5,6,7,x,x,x,x,x,x)",
        "(8,9,1,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,1)",
      ])
    ).toBe("2");
  });
});
