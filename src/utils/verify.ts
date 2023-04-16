export const verifyTextNotBlank = (text: string) => {
  return text.trim();
};

export function removeExtraSpaces(str: string): string {
  // Reemplazar todos los espacios dobles o más con un solo espacio
  str = str.replace(/\s{2,}/g, " ");
  // Eliminar espacios al inicio y al final del string
  str = str.trim();
  return str;
}
