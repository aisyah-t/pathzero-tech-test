import { displayDollarStringFromCents } from "./functions";

test("displayDollarString returns a dollar value string from cents", () => {
  const input = displayDollarStringFromCents(1000);
  const output = "$10.00";

  expect(input).toStrictEqual(output);
});

test("displayDollarString returns N/A when input is undefined or null", () => {
  const output = "N/A";

  const undefinedInput = displayDollarStringFromCents(undefined);
  expect(undefinedInput).toStrictEqual(output);

  const nullInput = displayDollarStringFromCents(null);
  expect(nullInput).toStrictEqual(output);
});
