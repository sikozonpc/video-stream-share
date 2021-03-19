export function capitalize(value: string) {
  const splitedValue = value.split('')
  return splitedValue[0].toUpperCase() + splitedValue.slice(1).join('').toLowerCase()
}