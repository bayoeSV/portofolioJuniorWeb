export const tambah = (a, b) => a + b;
export function bagi(a, b) {
  if (b === 0) throw new Error('Tidak bisa dibagi nol');
  return a / b;
}