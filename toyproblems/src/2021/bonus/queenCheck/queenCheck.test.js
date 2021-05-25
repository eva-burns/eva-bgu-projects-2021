const queenCheck = require("./queenCheck");

describe("queenCheck tests", () => {
  it("should pass first test", () => {
    expect(queenCheck(["(3,1)", "(1,4)"])).toBe(-1);
  });

  it("should pass second test", () => {
    expect(queenCheck(["(2,1)", "(2,3)"])).toBe(4);
  });

  it("should pass third test", () => {
    expect(queenCheck(["(2,2)", "(2,3)"])).toBe(3);
  });

  it("should pass fourth test", () => {
    expect(queenCheck(["(1,2)", "(6,7)"])).toBe(6);
  });

  it("should pass fifth test", () => {
    expect(queenCheck(["(1,1)", "(1,4)"])).toBe(3);
  });

  it("should pass sixth test", () => {
    expect(queenCheck(["(1,8)", "(2,7)"])).toBe(3);
  });

  it("should pass seventh test", () => {
    expect(queenCheck(["(1,1)", "(8,1)"])).toBe(2);
  });

  it("should pass eighth test", () => {
    expect(queenCheck(["(8,2)", "(7,3)"])).toBe(3);
  });

  it("should pass ninth test", () => {
    expect(queenCheck(["(8,2)", "(7,1)"])).toBe(2);
  });

  it("should pass tenth test", () => {
    expect(queenCheck(["(5,4)", "(3,2)"])).toBe(6);
  });
});
