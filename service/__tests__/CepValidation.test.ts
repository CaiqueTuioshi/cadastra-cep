import { validaCep } from "../src/utils/CepValidation";

describe('CepValidation', () => {
  test('deve lançar erro ao informar CEP com valor menor que 100.001', () => {
    expect(() => {
      validaCep(100000);
    }).toThrow('O CEP deve ser entre 100.001 e 999.998.')
  })
  
  test('deve lançar erro ao informar CEP com valor maior que 999.998', () => {
    expect(() => {
      validaCep(999999);
    }).toThrow('O CEP deve ser entre 100.001 e 999.998.')
  })
  
  test('deve lançar erro ao informar CEP com dígito repetitivo alternado em pares', () => {
    expect(() => {
      validaCep(121426);
    }).toThrow('O CEP não pode conter nenhum dígito repetitivo alternado em pares.')
  })

  test('não deve lançar erro ao informar CEP com valor entre 100.001 e 999.998', () => {
    expect(() => {
      validaCep(100001);
    }).not.toThrow('O CEP deve ser entre 100.001 e 999.998.')
  })
  
  test('não deve lançar erro ao informar CEP sem dígito repetitivo', () => {
    expect(() => {
      validaCep(523563);
    }).not.toThrow('O CEP não pode conter nenhum dígito repetitivo alternado em pares.')
  })
})