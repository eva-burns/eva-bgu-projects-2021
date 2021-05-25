const knightJumps = require("./knightJumps");

describe("knightJumps tests", () => {
  it("should pass first test", () => {
    expect(knightJumps("(4 5)")).toBe(8);
  });

  it("should pass second test", () => {
    expect(knightJumps("(1 1)")).toBe(2);
  });

  it("should pass third test", () => {
    expect(knightJumps("(2 8)")).toBe(3);
  });

  it("should pass fourth test", () => {
    expect(knightJumps("(1 8)")).toBe(2);
  });

  it("should pass fifth test", () => {
    expect(knightJumps("(5 4)")).toBe(8);
  });

  it("should pass sixth test", () => {
    expect(knightJumps("(8 3)")).toBe(4);
  });

  it("should pass seventh test", () => {
    expect(knightJumps("(2 2)")).toBe(4);
  });

  it("should pass eighth test", () => {
    expect(knightJumps("(8 8)")).toBe(2);
  });

  it("should pass ninth test", () => {
    expect(knightJumps("(6 3)")).toBe(8);
  });

  it("should pass tenth test", () => {
    expect(knightJumps("(7 3)")).toBe(6);
  });
});
