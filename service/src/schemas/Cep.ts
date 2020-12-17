import {Schema, model, Document} from 'mongoose'

interface CepInterface extends Document {
  cep: string,
  logradouro: string,
  complemento?: string,
  bairro: string,
  cidade: string,
  uf: string,
  ibge: string
}

const CepSchema = new Schema({
  cep: String,
  logradouro: String,
  complemento: String,
  bairro: String,
  cidade: String,
  uf: String,
  ibge: String
}, {
  timestamps: true
})

export default model<CepInterface>('Cep', CepSchema)