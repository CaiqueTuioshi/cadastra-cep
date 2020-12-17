export const validaCep = (cep: number) => {
  const pattern = /(?=((\d)\d\2))/;
  
  if (cep < 100001 || cep > 999998) {
    throw new Error('O CEP deve ser entre 100.001 e 999.998.')
  }

  if (pattern.test('' + cep)) {
    throw new Error('O CEP não pode conter nenhum dígito repetitivo alternado em pares.')
  }
}