const calculator = require("./calculator");

describe("calculator tests", () => {
  it("should pass first test", () => {
    expect(calculator("1+1+1+2")).toBe(5);
  });

  it("should pass second test", () => {
    expect(calculator("7-2+(5-2)")).toBe(8);
  });

  it("should pass third test", () => {
    expect(calculator("(4/2)(3-1)")).toBe(4);
  });

  it("should pass fourth test", () => {
    expect(calculator("6-3/1")).toBe(3);
  });

  it("should pass fifth test", () => {
    expect(calculator("45-10*2-1")).toBe(24);
  });

  it("should pass sixth test", () => {
    expect(calculator("100*2")).toBe(200);
  });

  it("should pass seventh test", () => {
    expect(calculator("812/2*(5-3)")).toBe(812);
  });

  it("should pass eighth test", () => {
    expect(calculator("7-4-1+8(3)/2")).toBe(14);
  });

  it("should pass ninth test", () => {
    expect(calculator("(5-2*0-9*0)*0")).toBe(0);
  });

  it("should pass tenth test", () => {
    expect(calculator("8-7*(12+100/2)*9-2")).toBe(-3900);
  });
});
