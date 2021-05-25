const shortestPath = require("./shortestPath");

describe("shortestPath tests", () => {
  it("should pass first test", () => {
    expect(shortestPath(["3", "A", "B", "C", "B-C", "A-B"])).toBe("A-B-C");
  });

  it("should pass second test", () => {
    expect(
      shortestPath([
        "5",
        "A",
        "B",
        "C",
        "Z",
        "Y",
        "B-C",
        "A-B",
        "A-Z",
        "C-Y",
        "Z-Y",
      ])
    ).toBe("A-Z-Y");
  });

  it("should pass third test", () => {
    expect(
      shortestPath([
        "6",
        "A",
        "B",
        "C",
        "Z",
        "Y",
        "Q",
        "B-C",
        "A-B",
        "A-Z",
        "C-Y",
        "Z-Y",
        "C-Q",
      ])
    ).toBe("A-B-C-Q");
  });

  it("should pass fourth test", () => {
    expect(
      shortestPath([
        "6",
        "Z",
        "B",
        "C",
        "A",
        "Y",
        "Q",
        "B-C",
        "A-B",
        "A-Z",
        "C-Y",
        "Z-Y",
        "C-Q",
      ])
    ).toBe("Z-Y-C-Q");
  });

  it("should pass fifth test", () => {
    expect(
      shortestPath(["5", "c", "h", "d", "s", "m", "c-s", "s-h", "d-m", "h-d"])
    ).toBe("c-s-h-d-m");
  });

  it("should pass sixth test", () => {
    expect(shortestPath(["2", "First Street", "Third Street"])).toBe(-1);
  });

  it("should pass seventh test", () => {
    expect(
      shortestPath([
        "7",
        "D",
        "A",
        "N",
        "I",
        "E",
        "L",
        "B",
        "D-A",
        "A-N",
        "E-B",
        "E-L",
      ])
    ).toBe(-1);
  });

  it("should pass eighth test", () => {
    expect(
      shortestPath([
        "7",
        "C",
        "B",
        "A",
        "D",
        "E",
        "G",
        "F",
        "A-B",
        "B-E",
        "E-G",
        "C-D",
        "D-B",
        "D-E",
        "E-F",
      ])
    ).toBe("C-D-E-F");
  });

  it("should pass ninth test", () => {
    expect(
      shortestPath([
        "9",
        "Z",
        "B",
        "C",
        "D",
        "R",
        "A",
        "Y",
        "Q",
        "E",
        "A-Z",
        "A-R",
        "Z-Y",
        "Z-C",
        "C-B",
        "Y-Q",
        "Q-D",
        "D-E",
        "R-E",
      ])
    ).toBe("Z-A-R-E");
  });

  it("should pass tenth test", () => {
    expect(
      shortestPath([
        "5",
        "N1",
        "N2",
        "N3",
        "N4",
        "N5",
        "N1-N3",
        "N3-N4",
        "N4-N5",
        "N5-N2",
        "N2-N1",
      ])
    ).toBe("N1-N2-N5");
  });
});
