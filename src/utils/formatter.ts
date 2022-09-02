export const dateFormatter = (value: Date) =>
  new Intl.DateTimeFormat('pt-BR').format(value)

export const priceFormatter = (value: number) => {
  const price = value / 100

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)
}
