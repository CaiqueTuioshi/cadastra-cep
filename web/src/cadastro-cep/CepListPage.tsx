import React from 'react';
import { Container, Table, Button, ButtonGroup } from 'reactstrap';
import Swal from 'sweetalert2';

type Props = {};

const CepListPage: React.FC<Props> = () => {
  const onRemove = () => {
    Swal.fire({
      title: 'Deseja remover este CEP?',
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: `Confirmar`,
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('CEP removido!', '', 'success');
      }
    });
  };

  return (
    <Container className='themed-container'>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <ButtonGroup>
                <Button color='success'>Editar</Button>
                <Button color='danger' onClick={() => onRemove()}>
                  Remover
                </Button>
              </ButtonGroup>
            </td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
              <ButtonGroup>
                <Button color='success'>Editar</Button>
                <Button color='danger' onClick={() => onRemove()}>
                  Remover
                </Button>
              </ButtonGroup>
            </td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>
              <ButtonGroup>
                <Button color='success'>Editar</Button>
                <Button color='danger' onClick={() => onRemove()}>
                  Remover
                </Button>
              </ButtonGroup>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default CepListPage;
