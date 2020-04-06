export function useFilters() {
  return {
    formatDate(date: string) {
      const [ano, mes, dia] = date.split('-');
      return `${dia}/${mes}/${ano}`;
    },

    cpf(cpf: string) {
      const cpf1 = cpf.substr(0, 3);
      const cpf2 = cpf.substr(2, 3);
      const cpf3 = cpf.substr(4, 3);
      const cpf4 = cpf.substr(6, 2);

      return `${cpf1}.${cpf2}.${cpf3}-${cpf4}`;
    },
  };
}
