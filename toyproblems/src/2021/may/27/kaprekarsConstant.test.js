const kaprekarsConstant = require("./kaprekarsConstant");

describe("kaprekarsConstant tests", () => {
  it("should pass first test", () => {
    expect(kaprekarsConstant(3524)).toBe(3);
  });

  it("should pass second test", () => {
    expect(kaprekarsConstant(2111)).toBe(5);
  });

  it("should pass third test", () => {
    expect(kaprekarsConstant(9831)).toBe(7);
  });

  it("should pass fourth test", () => {
    expect(kaprekarsConstant(9813)).toBe(7);
  });

  it("should pass fifth test", () => {
    expect(kaprekarsConstant(4371)).toBe(7);
  });

  it("should pass sixth test", () => {
    expect(kaprekarsConstant(7614)).toBe(1);
  });

  it("should pass seventh test", () => {
    expect(kaprekarsConstant(8774)).toBe(4);
  });

  it("should pass eighth test", () => {
    expect(kaprekarsConstant(7847)).toBe(4);
  });

  it("should pass ninth test", () => {
    expect(kaprekarsConstant(1121)).toBe(5);
  });

  it("should pass tenth test", () => {
    expect(kaprekarsConstant(5342)).toBe(3);
  });
});
