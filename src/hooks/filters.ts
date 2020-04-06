export function useFilters() {
  return {
    formatDate(date: string) {
      const [ano, mes, dia] = date.split('-');
      return `${dia}/${mes}/${ano}`;
    },

    cpf(cpf: string | undefined) {
      if (!cpf) {
        return '';
      }

      const cpf1 = cpf.substr(0, 3);
      const cpf2 = cpf.substr(3, 3);
      const cpf3 = cpf.substr(6, 3);
      const cpf4 = cpf.substr(9, 2);

      return `${cpf1}.${cpf2}.${cpf3}-${cpf4}`;
    },

    currency(value: number | undefined): string {
      if (value === undefined) {
        return '';
      }

      if (typeof value === 'string') {
        value = parseFloat(value);
      }

      const valueString = value.toFixed(2);

      const temDecimal = valueString.toString().indexOf('.') >= 0;

      let result = valueString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, 'ponto');

      if (temDecimal) {
        result = result.replace('.', ',');
      } else {
        result += ',00';
      }

      return result.replace('ponto', '.');
    },

  };
}
