interface ICurrency {
  value: number;
}

export default function Value({ value }: ICurrency) {
  const formattedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  return <>{formattedValue}</>;
}
