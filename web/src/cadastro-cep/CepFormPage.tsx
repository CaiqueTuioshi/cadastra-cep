import { Formik, FormikProps } from 'formik';
import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  ButtonToggle,
} from 'reactstrap';
import * as Yup from 'yup';
import { cepForm } from '../types/Cep';

type Props = {};

const initialValue: cepForm = {
  cep: '',
  logradouro: '',
  complemento: '',
  bairro: '',
  cidade: '',
  uf: '',
  ibge: '',
};

const validationSchema = Yup.object().shape({
  cep: Yup.string().required('CEP é obrigatório'),
  logradouro: Yup.string().required('Logradouro é obrigatório'),
  bairro: Yup.string().required('Bairro é obrigatório'),
  cidade: Yup.string().required('Cidade é obrigatório'),
  uf: Yup.string().required('Estado é obrigatório'),
  ibge: Yup.string().required('IBGE é obrigatório'),
});

const CepFormPage: React.FC<Props> = () => {
  const history = useHistory();

  const onSubmit = (values: cepForm) => {
    console.log({ values });

    history.push('/ceps');
  };

  return (
    <Container className='themed-container'>
      <Formik
        initialValues={initialValue}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formProps: FormikProps<cepForm>) => (
          <React.Fragment>
            <Row>
              <Col md={2}>
                <FormGroup>
                  <Label for='cep'>CEP</Label>
                  <Input
                    type='text'
                    name='cep'
                    id='cep'
                    placeholder='00000-000'
                    onChange={(value) => {
                      formProps.setFieldValue('cep', value.target.value);
                      formProps.setFieldTouched('cep', true);
                    }}
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
                  />
                  {formProps.touched.ibge && formProps.errors.ibge ? (
                    <div className='error'>{formProps.errors.ibge}</div>
                  ) : null}
                </FormGroup>
              </Col>
            </Row>

            <div>
              <ButtonToggle color='primary' onClick={formProps.submitForm}>
                Salvar
              </ButtonToggle>
            </div>
          </React.Fragment>
        )}
      </Formik>
    </Container>
  );
};

export default CepFormPage;
