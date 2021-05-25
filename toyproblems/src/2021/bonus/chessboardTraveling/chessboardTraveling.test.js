const chessboardTraveling = require("./chessboardTraveling");

describe("chessboardTraveling tests", () => {
  it("should pass first test", () => {
    expect(chessboardTraveling("(1 1)(2 2)")).toBe(2);
  });

  it("should pass second test", () => {
    expect(chessboardTraveling("(1 1)(3 3)")).toBe(6);
  });

  it("should pass third test", () => {
    expect(chessboardTraveling("(2 2)(4 3)")).toBe(3);
  });

  it("should pass fourth test", () => {
    expect(chessboardTraveling("(2 2)(3 4)")).toBe(3);
  });

  it("should pass fifth test", () => {
    expect(chessboardTraveling("(2 2)(3 3)")).toBe(2);
  });

  it("should pass sixth test", () => {
    expect(chessboardTraveling("(1 1)(4 4)")).toBe(20);
  });

  it("should pass seventh test", () => {
    expect(chessboardTraveling("(1 1)(5 5)")).toBe(70);
  });

  it("should pass eighth test", () => {
    expect(chessboardTraveling("(7 7)(8 8)")).toBe(2);
  });

  it("should pass ninth test", () => {
    expect(chessboardTraveling("(1 1)(8 8)")).toBe(3432);
  });

  it("should pass tenth test", () => {
    expect(chessboardTraveling("(1 1)(4 6)")).toBe(56);
  });
});
