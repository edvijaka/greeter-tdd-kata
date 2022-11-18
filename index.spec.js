describe("my greeter MF", () => {
  it("should say hello <name>", () => {
    const greeter = new Greeter("name");

    expect(greeter.greet()).toEqual("Hello name");
  });
});
