export function displayDollarStringFromCents(cents?: number | null): string {
  if (!cents) {
    return "N/A";
  }

  const dollarValue = cents / 100;

  return dollarValue.toLocaleString("en-AU", {
    style: "currency",
    currency: "AUD",
  });
}
