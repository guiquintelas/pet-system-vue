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
    },
  };
}
