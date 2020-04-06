/* eslint-disable radix */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-explicit-any */

export function useValidations() {
  return {
    validations: {
      required(v: any) {
        if (v === '' || v === null || typeof v === 'undefined') {
          return 'This field is required!';
        }

        return true;
      },

      email(v: any) {
        if (!v) return false;

        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)
          || 'Invalid email!';
      },

      cpf(cpf: string) {
        if (!cpf) return false;

        cpf = cpf.replace(/[^\d]+/g, '');

        if (cpf === '') return 'Invalid CPF!';

        if (cpf.length !== 11) {
          return 'Invalid CPF!';
        }

        // Elimina CPFs invalidos conhecidos
        if (cpf === '00000000000'
            || cpf === '11111111111'
            || cpf === '22222222222'
            || cpf === '33333333333'
            || cpf === '44444444444'
            || cpf === '55555555555'
            || cpf === '66666666666'
            || cpf === '77777777777'
            || cpf === '88888888888'
            || cpf === '99999999999') { return 'Invalid CPF!'; }
        // Valida 1o digito
        let add = 0;
        let rev = 0;
        for (let i = 0; i < 9; i++) { add += parseInt(cpf.charAt(i)) * (10 - i); }
        rev = 11 - (add % 11);
        if (rev === 10 || rev === 11) { rev = 0; }
        if (rev !== parseInt(cpf.charAt(9))) { return 'Invalid CPF!'; }
        // Valida 2o digito
        add = 0;
        for (let i = 0; i < 10; i++) { add += parseInt(cpf.charAt(i)) * (11 - i); }
        rev = 11 - (add % 11);
        if (rev === 10 || rev === 11) { rev = 0; }
        if (rev !== parseInt(cpf.charAt(10))) { return 'Invalid CPF!'; }
        return true;
      },
    },
  };
}
