import React, { useState } from 'react';
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge,
  Modal,
  ModalHeader,
  ModalFooter,
} from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { lineChartData } from 'data/charts';
import { NotificationManager } from 'components/common/react-notifications';
import { LineChart } from 'components/charts';

const Awp = ({ match }) => {
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
          <Breadcrumb heading="menu.awp-title" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <CardTitle>Grafik AWP</CardTitle>
              <Row>
                <Colxx xxs="12" lg="6" className="mb-5">
                  <CardSubtitle>Kelembapan tanah</CardSubtitle>
                  <div className="chart-container">
                    <LineChart shadow data={lineChartData} />
                  </div>
                </Colxx>

                <Colxx xxs="12" lg="6" className="mb-5">
                  <CardSubtitle>Penyiraman otomatis</CardSubtitle>
                  <div className="chart-container">
                    <LineChart shadow data={lineChartData} />
                  </div>
                </Colxx>
              </Row>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
      <Colxx className="p-0">
        <Row className="align-items-center mb-4 ml-1">
          <h4 className="mr-2">Status:</h4>
          <Badge pill color={status ? 'success' : 'danger'}>
            {status ? 'Hidup' : 'Mati'}
          </Badge>
        </Row>
        <Button onClick={activeHandler} color="success mr-2">
          Mulai penyiraman otomatis
        </Button>
        <Button onClick={nonActiveHandler} color="danger">
          Hentikan penyiraman otomatis
        </Button>
      </Colxx>
      <Modal isOpen={modalOpen}>
        <ModalHeader>
          {status
            ? 'Yakin menghentikan penyiraman otomatis?'
            : 'Yakin mengaktifkan penyiraman otomatis?'}
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

export default Awp;
