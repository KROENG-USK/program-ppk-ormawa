/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  Row,
  Button,
  Badge,
  Modal,
  ModalHeader,
  ModalFooter,
  CardTitle,
  Card,
} from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { NotificationManager } from 'components/common/react-notifications';
import IconCard from 'components/cards/IconCard';
import { BarChart } from 'components/charts';
import { ThemeColors } from 'helpers/ThemeColors';
import axios from 'axios';
import { api } from 'constants/defaultValues';
import { getCurrentUser } from 'helpers/Utils';

const Awp = ({ match }) => {
  const colors = ThemeColors();
  const user = getCurrentUser();
  const [status, setStatus] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [dataKelembapan, setDataKelembapan] = useState({
    labels: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
    ],
    datasets: [
      {
        label: 'Sensor kelembapan tanah',
        borderColor: colors.themeColor1,
        backgroundColor: colors.themeColor1_10,
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        borderWidth: 1,
      },
    ],
  });

  const getDataKelembapan = async () => {
    await axios
      .get(`${api}/sensor`, {
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      })
      .then((response) => {
        if (!response.data.error) {
          const kelembapanList = Object.values(response.data.data);
          const labels = [...kelembapanList.keys()].map((i) => i + 1);
          setDataKelembapan({
            labels,
            datasets: [
              {
                label: 'Sensor kelembapan tanah',
                borderColor: colors.themeColor1,
                backgroundColor: colors.themeColor1_10,
                data: kelembapanList,
                borderWidth: 1,
              },
            ],
          });
        }
      });
  };

  useEffect(() => {
    getDataKelembapan();
  }, []);

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
        <Colxx xxs="12" lg="6" className="mb-5">
          <Card className="p-4">
            <CardTitle>Tingkat kelembapan tanah</CardTitle>
            <div className="chart-container">
              <BarChart shadow data={dataKelembapan} />
            </div>
          </Card>
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
