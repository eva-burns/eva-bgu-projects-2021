const switchSort = require("./switchSort");

describe("switchSort tests", () => {
  it("should pass first test", () => {
    expect(switchSort([1, 2, 4, 3])).toBe(1);
  });

  it("should pass second test", () => {
    expect(switchSort([1, 2, 3, 4])).toBe(0);
  });

  it("should pass third test", () => {
    expect(switchSort([3, 4, 2, 1])).toBe(3);
  });

  it("should pass fourth test", () => {
    expect(switchSort([1, 3, 4, 2])).toBe(2);
  });

  it("should pass fifth test", () => {
    expect(switchSort([3, 1, 2])).toBe(2);
  });

  it("should pass sixth test", () => {
    expect(switchSort([4, 3, 2, 1])).toBe(2);
  });

  it("should pass seventh test", () => {
    expect(switchSort([5, 4, 3, 2, 1])).toBe(2);
  });

  it("should pass eighth test", () => {
    expect(switchSort([2, 1])).toBe(1);
  });

  it("should pass ninth test", () => {
    expect(switchSort([5, 3, 4, 1, 2])).toBe(4);
  });

  it("should pass tenth test", () => {
    expect(switchSort([5, 4, 3, 1, 2])).toBe(3);
  });
});
