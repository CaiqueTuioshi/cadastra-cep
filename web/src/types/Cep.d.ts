export type CepForm = {
  _id?: string;
  cep: number | string;
  logradouro: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  ibge: string;
};