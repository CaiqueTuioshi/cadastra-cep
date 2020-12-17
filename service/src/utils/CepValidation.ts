export const validaCep = (cep: number) => {
  const pattern = /(?=((\d)\d\2))/;
  
  if (cep < 100000 || cep > 999999) {
    throw new Error('O CEP deve ser entre 100.000 e 999.999.')
  }

  if (pattern.test('' + cep)) {
    throw new Error('O CEP não pode conter nenhum dígito repetitivo alternado em pares.')
  }
}