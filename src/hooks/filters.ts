export function useFilters() {
  return {
    formatDate(date: string) {
      const [ano, mes, dia] = date.split('-');
      return `${dia}/${mes}/${ano}`;
    },
  };
}
