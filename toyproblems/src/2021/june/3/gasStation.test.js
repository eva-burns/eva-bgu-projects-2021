const switchSort = require("./switchSort");

describe("switchSort tests", () => {
  it("should pass first test", () => {
    expect(switchSort(["4", "1:1", "2:2", "1:2", "0:1"])).toBe("impossible");
  });

  it("should pass second test", () => {
    expect(switchSort(["4", "0:1", "2:2", "1:2", "3:1"])).toBe(4);
  });

  it("should pass third test", () => {
    expect(switchSort(["4", "0:1", "2:2", "1:2", "1:1"])).toBe("impossible");
  });

  it("should pass fourth test", () => {
    expect(switchSort(["3", "2:3", "2:1", "4:4"])).toBe(2);
  });

  it("should pass fifth test", () => {
    expect(switchSort(["5", "3:3", "1:2", "2:2", "3:2", "4:3"])).toBe(3);
  });

  it("should pass sixth test", () => {
    expect(switchSort(["5", "0:1", "2:1", "3:2", "4:6", "4:3"])).toBe(2);
  });

  it("should pass seventh test", () => {
    expect(switchSort(["2", "1:2", "3:2"])).toBe(2);
  });

  it("should pass eighth test", () => {
    expect(switchSort(["2", "1:2", "1:2"])).toBe("impossible");
  });

  it("should pass ninth test", () => {
    expect(switchSort(["6", "3:2", "2:2", "10:6", "0:4", "1:1", "30:10"])).toBe(
      1
    );
  });

  it("should pass tenth test", () => {
    expect(switchSort(["5", "2:3", "2:3", "2:3", "500:1", "0:495"])).toBe(4);
  });
});
