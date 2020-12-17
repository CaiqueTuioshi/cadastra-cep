import axios, { AxiosPromise } from "axios";

import {CepForm} from '../types/Cep'

export const findAll = (): AxiosPromise<CepForm[]> =>
  axios.get('http://localhost:3333/ceps');

export const findById = (id: string): AxiosPromise<CepForm> =>
  axios.get(`http://localhost:3333/ceps/${id}`);

export const save = (cep: CepForm): AxiosPromise<CepForm> =>
  cep._id 
  ? axios.put(`http://localhost:3333/ceps/${cep._id}`, cep) 
  : axios.post('http://localhost:3333/ceps', cep)

export const remove = (id: string): AxiosPromise<CepForm> =>
  axios.delete(`http://localhost:3333/ceps/${id}`);