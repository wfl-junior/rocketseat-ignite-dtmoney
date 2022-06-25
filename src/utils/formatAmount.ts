const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function formatAmount(amount: number) {
  return formatter.format(amount);
}
