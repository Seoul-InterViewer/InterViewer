export function formattedDate(originDate: string): string {
  const date = new Date(originDate);
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
}
