import React, { useState } from 'react';
import {
  Row,
  Card,
  CardBody,
  CardHeader,
  Button,
  Badge,
  Modal,
  ModalHeader,
  ModalFooter,
} from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import Line from 'components/charts/Line';
import { lineChartData } from 'data/charts';
import { NotificationManager } from 'components/common/react-notifications';

const Listrik = ({ match }) => {
  const [status, setStatus] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const activeHandler = () => {
    if (!status) {
      setModalOpen(!modalOpen);
    } else {
      NotificationManager.warning(
        'Status telah aktif!',
        'Warning',
        3000,
        null,
        null,
        ''
      );
    }
  };

  const nonActiveHandler = () => {
    if (status) {
      setModalOpen(!modalOpen);
    } else {
      NotificationManager.warning(
        'Status telah mati!',
        'Warning',
        3000,
        null,
        null,
        ''
      );
    }
  };

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.listrik" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row className="d-flex justify-content-between mb-4">
        <Card
          style={{
            minHeight: '25rem',
            minWidth: '49%',
            marginTop: '2rem',
          }}
        >
          <CardHeader className="p-4">
            <h4>Baterai</h4>
          </CardHeader>
          <CardBody>
            <Line data={lineChartData} shadow />
          </CardBody>
        </Card>
        <Card
          style={{
            minHeight: '25rem',
            minWidth: '49%',
            marginTop: '2rem',
          }}
        >
          <CardHeader className="p-4">
            <h4>Pemakaian listrik</h4>
          </CardHeader>
          <CardBody>
            <Line data={lineChartData} shadow />
          </CardBody>
        </Card>
        <Colxx className="mt-5 p-0">
          <Row className="align-items-center mb-2 ml-1">
            <h4 className="mr-2">Status:</h4>
            <Badge color={status ? 'success' : 'danger'}>
              {status ? 'Hidup' : 'Mati'}
            </Badge>
          </Row>
          <Row className="align-items-center mb-4 ml-1">
            <h4 className="mr-2">Tegangan:</h4>
            <Badge color="warning">15V</Badge>
          </Row>
          <Button onClick={activeHandler} color="success mr-2">
            Aktifkan listrik
          </Button>
          <Button onClick={nonActiveHandler} color="danger">
            Matikan listrik
          </Button>
        </Colxx>
      </Row>
      <Modal isOpen={modalOpen}>
        <ModalHeader>
          {status ? 'Yakin mematikan listrik?' : 'Yakin mengaktifkan listrik?'}
        </ModalHeader>
        <ModalFooter>
          {status ? (
            <Button
              color="danger"
              onClick={() => {
                setStatus(false);
                setModalOpen(!modalOpen);
              }}
            >
              Matikan
            </Button>
          ) : (
            <Button
              color="success"
              onClick={() => {
                setStatus(true);
                setModalOpen(!modalOpen);
              }}
            >
              Aktifkan
            </Button>
          )}
          <Button
            outline
            onClick={() => {
              setModalOpen(!setModalOpen);
            }}
          >
            Batal
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
export default Listrik;
