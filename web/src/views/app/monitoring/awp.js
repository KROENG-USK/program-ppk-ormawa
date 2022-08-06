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
import IconCard from 'components/cards/IconCard';

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
          <div className="icon-cards-row d-flex flex-wrap">
            <IconCard
              icon="iconsminds-drop"
              title="Kelembapan Tanah"
              value="65 %"
            />
          </div>
        </Colxx>
      </Row>
      <Colxx className="p-0">
        <Row className="align-items-center mb-4 ml-1">
          <h4 className="mr-2">Status:</h4>
          <Badge color={status ? 'success mb-2' : 'danger mb-2'}>
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
