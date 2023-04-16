export function formatNumber(num: number) {
  return num.toLocaleString("es-ES", {
    useGrouping: true,
    maximumFractionDigits: 2,
  });
}
