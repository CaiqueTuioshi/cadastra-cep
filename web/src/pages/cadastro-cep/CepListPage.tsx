import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Table, Button, ButtonGroup } from 'reactstrap';
import Swal from 'sweetalert2';
import { CadastroCepService } from '../../services';
import { CepForm } from '../../types/Cep';

type Props = {};

const CepListPage: React.FC<Props> = () => {
  const history = useHistory();
  const [ceps, setCeps] = useState<CepForm[]>([]);

  useEffect(() => {
    findAll();
  }, []);

  const findAll = () => {
    CadastroCepService.findAll()
      .then((response) => {
        setCeps(response.data);
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  const onEdit = (id: string) => {
    console.log({ id });
    history.push(`/ceps/${id}`);
  };

  const onRemove = (id: string) => {
    Swal.fire({
      title: 'Deseja remover este CEP?',
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: `Confirmar`,
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        CadastroCepService.remove(id)
          .then(async () => {
            await findAll();
            Swal.fire('CEP removido!', '', 'success');
          })
          .catch((error) => console.log({ error }));
      }
    });
  };

  return (
    <Container className='themed-container'>
      <Table hover>
        <thead>
          <tr>
            <th>CEP</th>
            <th>Logradouro</th>
            <th>Bairro</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {console.log({ ceps })}
          {ceps.map((cep) => {
            return (
              <tr key={cep._id}>
                <td>{cep.cep}</td>
                <td>{cep.logradouro}</td>
                <td>{cep.bairro}</td>
                <td>{cep.cidade}</td>
                <td>{cep.uf}</td>
                <td>
                  <ButtonGroup>
                    <Button
                      className='button'
                      color='success'
                      onClick={() => onEdit(cep._id!)}
                    >
                      Editar
                    </Button>
                    <Button
                      className='button'
                      color='danger'
                      onClick={() => onRemove(cep._id!)}
                    >
                      Remover
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default CepListPage;
