const blackjackHighest = require("./blackjackHighest");

describe("blackjackHighest tests", () => {
  it("should pass first test", () => {
    expect(blackjackHighest(["king", "ace", "two"])).toBe("below king");
  });

  it("should pass second test", () => {
    expect(blackjackHighest(["queen", "ace", "ten"])).toBe("blackjack queen");
  });

  it("should pass third test", () => {
    expect(blackjackHighest(["queen", "ace", "seven"])).toBe("below queen");
  });

  it("should pass fourth test", () => {
    expect(blackjackHighest(["five", "six", "king"])).toBe("blackjack king");
  });

  it("should pass fifth test", () => {
    expect(blackjackHighest(["five", "eight", "jack"])).toBe("above jack");
  });

  it("should pass sixth test", () => {
    expect(
      blackjackHighest(["four", "four", "four", "four", "four", "ace"])
    ).toBe("blackjack four");
  });

  it("should pass seventh test", () => {
    expect(blackjackHighest(["three", "eight", "queen"])).toBe(
      "blackjack queen"
    );
  });

  it("should pass eighth test", () => {
    expect(blackjackHighest(["four", "seven", "ace"])).toBe("below seven");
  });

  it("should pass ninth test", () => {
    expect(blackjackHighest(["jack", "ace"])).toBe("blackjack ace");
  });

  it("should pass tenth test", () => {
    expect(
      blackjackHighest(["two", "three", "four", "five", "six", "ace"])
    ).toBe("blackjack six");
  });
});
