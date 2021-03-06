import { Formik, FormikProps } from 'formik';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import * as Yup from 'yup';
import { CadastroCepService } from '../../services';
import { CepForm } from '../../types/Cep';

type Props = {};

const initialValue: CepForm = {
  cep: '',
  logradouro: '',
  complemento: '',
  bairro: '',
  cidade: '',
  uf: '',
  ibge: '',
};

const validationSchema = Yup.object().shape({
  cep: Yup.number()
    .required('CEP é obrigatório')
    .test(
      'validaDigitos',
      'O CEP deve ser entre 100.001 e 999.998',
      function (value: number | undefined): boolean {
        if (value !== undefined) {
          return !(value < 100001 || value > 999998);
        }

        return true;
      }
    ),
  logradouro: Yup.string().required('Logradouro é obrigatório'),
  bairro: Yup.string().required('Bairro é obrigatório'),
  cidade: Yup.string().required('Cidade é obrigatório'),
  uf: Yup.string().required('Estado é obrigatório'),
  ibge: Yup.string().required('IBGE é obrigatório'),
});

const CepFormPage: React.FC<Props> = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [cep, setCep] = useState<CepForm>(initialValue);
  const isNew = id === 'novo';

  useEffect(() => {
    if (!isNew) {
      CadastroCepService.findById(id)
        .then((response) => {
          setCep(response.data);
        })
        .catch((error) => {
          console.log({ error });
        });
    }
  }, [isNew, id]);

  const onSubmit = (value: CepForm) => {
    CadastroCepService.save(value)
      .then(() => history.push('/ceps'))
      .catch((error) => {
        toast.error(error.response.data.errorMessage);
      });
  };

  const onCancel = () => {
    history.push('/ceps');
  };

  return (
    <Container className='themed-container'>
      <Formik
        initialValues={cep}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {(formProps: FormikProps<CepForm>) => (
          <React.Fragment>
            <ToastContainer />
            <Row>
              <Col md={2}>
                <FormGroup>
                  <Label for='cep'>CEP</Label>
                  <Input
                    type='text'
                    name='cep'
                    id='cep'
                    onChange={(value) => {
                      formProps.setFieldValue('cep', +value.target.value);
                      formProps.setFieldTouched('cep', true);
                    }}
                    value={formProps.values.cep}
                  />
                  {formProps.touched.cep && formProps.errors.cep ? (
                    <div className='error'>{formProps.errors.cep}</div>
                  ) : null}
                </FormGroup>
              </Col>
              <Col md={5}>
                <FormGroup>
                  <Label for='logradouro'>Logradouro</Label>
                  <Input
                    type='text'
                    name='logradouro'
                    id='logradouro'
                    onChange={(value) => {
                      formProps.setFieldValue('logradouro', value.target.value);
                      formProps.setFieldTouched('logradouro', true);
                    }}
                    value={formProps.values.logradouro}
                  />
                  {formProps.touched.logradouro &&
                  formProps.errors.logradouro ? (
                    <div className='error'>{formProps.errors.logradouro}</div>
                  ) : null}
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for='complemento'>Complemento</Label>
                  <Input
                    type='text'
                    name='complemento'
                    id='complemento'
                    onChange={(value) => {
                      formProps.setFieldValue(
                        'complemento',
                        value.target.value
                      );
                      formProps.setFieldTouched('complemento', true);
                    }}
                    value={formProps.values.complemento}
                  />
                  {formProps.touched.complemento &&
                  formProps.errors.complemento ? (
                    <div className='error'>{formProps.errors.complemento}</div>
                  ) : null}
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for='bairro'>Bairro</Label>
                  <Input
                    type='text'
                    name='bairro'
                    id='bairro'
                    onChange={(value) => {
                      formProps.setFieldValue('bairro', value.target.value);
                      formProps.setFieldTouched('bairro', true);
                    }}
                    value={formProps.values.bairro}
                  />
                  {formProps.touched.bairro && formProps.errors.bairro ? (
                    <div className='error'>{formProps.errors.bairro}</div>
                  ) : null}
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <FormGroup>
                  <Label for='cidade'>Cidade</Label>
                  <Input
                    type='text'
                    name='cidade'
                    id='cidade'
                    onChange={(value) => {
                      formProps.setFieldValue('cidade', value.target.value);
                      formProps.setFieldTouched('cidade', true);
                    }}
                    value={formProps.values.cidade}
                  />
                  {formProps.touched.cidade && formProps.errors.cidade ? (
                    <div className='error'>{formProps.errors.cidade}</div>
                  ) : null}
                </FormGroup>
              </Col>
              <Col md={1}>
                <FormGroup>
                  <Label for='uf'>Estado</Label>
                  <Input
                    type='text'
                    name='uf'
                    id='uf'
                    onChange={(value) => {
                      formProps.setFieldValue('uf', value.target.value);
                      formProps.setFieldTouched('uf', true);
                    }}
                    value={formProps.values.uf}
                  />
                  {formProps.touched.uf && formProps.errors.uf ? (
                    <div className='error'>{formProps.errors.uf}</div>
                  ) : null}
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for='ibge'>IBGE</Label>
                  <Input
                    type='text'
                    name='ibge'
                    id='ibge'
                    onChange={(value) => {
                      formProps.setFieldValue('ibge', value.target.value);
                      formProps.setFieldTouched('ibge', true);
                    }}
                    value={formProps.values.ibge}
                  />
                  {formProps.touched.ibge && formProps.errors.ibge ? (
                    <div className='error'>{formProps.errors.ibge}</div>
                  ) : null}
                </FormGroup>
              </Col>
            </Row>

            <div>
              <Button
                className='button'
                color='primary'
                onClick={formProps.submitForm}
              >
                Salvar
              </Button>
              <Button className='button' color='danger' onClick={onCancel}>
                Cancelar
              </Button>
            </div>
          </React.Fragment>
        )}
      </Formik>
    </Container>
  );
};

export default CepFormPage;
