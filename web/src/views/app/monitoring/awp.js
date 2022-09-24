/* eslint-disable react/no-array-index-key */
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
  Table,
} from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { NotificationManager } from 'components/common/react-notifications';
import { BarChart } from 'components/charts';
import { ThemeColors } from 'helpers/ThemeColors';
import axios from 'axios';
import { api } from 'constants/defaultValues';
import { getCurrentUser } from 'helpers/Utils';

const Awp = ({ match }) => {
  const colors = ThemeColors();
  const user = getCurrentUser();
  const [kranModal, setKranModal] = useState([false, '', '']);
  const [pompaModal, setPompaModal] = useState([false, '', '']);
  const [isLoading, setIsLoading] = useState(false);
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
  const [kran, setKran] = useState({
    'Kran 1': 'Mati',
    'Kran 2': 'Mati',
    'Kran 3': 'Mati',
    'Kran 4': 'Mati',
  });
  const [pompa, setPompa] = useState({
    'Pompa 1': 'Mati',
    'Pompa 2': 'Mati',
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

  const getKran = async () => {
    await axios
      .get(`${api}/saklar-kran`, {
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      })
      .then((response) => {
        if (!response.data.error) {
          setKran({
            'Kran 1': response.data.data.kran_1 ? 'Hidup' : 'Mati',
            'Kran 2': response.data.data.kran_2 ? 'Hidup' : 'Mati',
            'Kran 3': response.data.data.kran_3 ? 'Hidup' : 'Mati',
            'Kran 4': response.data.data.kran_4 ? 'Hidup' : 'Mati',
          });
        }
      });
  };

  const setKranValue = async (kranName, value) => {
    const krans = {
      'Kran 1': 'kran_1',
      'Kran 2': 'kran_2',
      'Kran 3': 'kran_3',
      'Kran 4': 'kran_4',
    };
    const values = {
      Hidup: false,
      Mati: true,
    };
    await axios
      .get(
        `${api}/saklar-kran?saklar=${krans[kranName]}&value=${values[value]}`,
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        }
      )
      .then((response) => {
        const switchStatus = {
          Hidup: 'dimatikan',
          Mati: 'dihidupkan',
        };
        if (!response.data.error) {
          getKran();
          NotificationManager.info(
            `${kranName} berhasil ${switchStatus[value]}.`,
            'Info',
            3000,
            null,
            null,
            ''
          );
        } else {
          NotificationManager.error(
            response.data.data.message,
            'Error',
            3000,
            null,
            null,
            ''
          );
        }
      });
  };

  const getPompa = async () => {
    await axios
      .get(`${api}/saklar-pompa`, {
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      })
      .then((response) => {
        if (!response.data.error) {
          setPompa({
            'Pompa 1': response.data.data.pompa_1 ? 'Hidup' : 'Mati',
            'Pompa 2': response.data.data.pompa_2 ? 'Hidup' : 'Mati',
          });
        }
      });
  };

  const setPompaValue = async (pompaName, value) => {
    const pompas = {
      'Pompa 1': 'pompa_1',
      'Pompa 2': 'pompa_2',
    };
    const values = {
      Hidup: false,
      Mati: true,
    };
    await axios
      .get(
        `${api}/saklar-pompa?saklar=${pompas[pompaName]}&value=${values[value]}`,
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        }
      )
      .then((response) => {
        const switchStatus = {
          Hidup: 'dimatikan',
          Mati: 'dihidupkan',
        };
        if (!response.data.error) {
          getPompa();
          NotificationManager.info(
            `${pompaName} berhasil ${switchStatus[value]}.`,
            'Info',
            3000,
            null,
            null,
            ''
          );
        } else {
          NotificationManager.error(
            response.data.data.message,
            'Error',
            3000,
            null,
            null,
            ''
          );
        }
      });
  };

  useEffect(() => {
    setIsLoading(true);
    getDataKelembapan();
    getKran();
    getPompa();
    setInterval(() => {
      getDataKelembapan();
      getKran();
      getPompa();
    }, 5000);
    setIsLoading(false);
  }, []);

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.awp-title" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      {isLoading ? (
        <div className="loading" />
      ) : (
        <>
          <Row className="mb-2">
            <Colxx xxs="12" className="mb-2">
              <Card className="p-4">
                <CardTitle>Tingkat kelembapan tanah</CardTitle>
                <div className="chart-container">
                  <BarChart shadow data={dataKelembapan} />
                </div>
              </Card>
            </Colxx>
          </Row>
          <Colxx className="p-0 mb-3">
            <Card className="p-4">
              <CardTitle>Saklar kran</CardTitle>
              <Table striped>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Kran</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(kran).map((key, index) => (
                    <tr key={key}>
                      <th scope="row">{index + 1}</th>
                      <td>{key}</td>
                      <td>
                        <Badge
                          color={kran[key] === 'Hidup' ? 'success' : 'danger'}
                        >
                          {kran[key]}
                        </Badge>
                      </td>
                      <td>
                        <Button
                          className="btn-xs btn-shadow"
                          color="info"
                          onClick={() => setKranModal([true, key, kran[key]])}
                        >
                          {kran[key] === 'Hidup' ? 'Matikan' : 'Hidupkan'}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Colxx>
          <Colxx className="p-0 mb-3">
            <Card className="p-4">
              <CardTitle>Saklar pompa</CardTitle>
              <Table striped>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Pompa</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(pompa).map((key, index) => (
                    <tr key={key}>
                      <th scope="row">{index + 1}</th>
                      <td>{key}</td>
                      <td>
                        <Badge
                          color={pompa[key] === 'Hidup' ? 'success' : 'danger'}
                        >
                          {pompa[key]}
                        </Badge>
                      </td>
                      <td>
                        <Button
                          className="btn-xs btn-shadow"
                          color="info"
                          onClick={() => setPompaModal([true, key, pompa[key]])}
                        >
                          {pompa[key] === 'Hidup' ? 'Matikan' : 'Hidupkan'}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Colxx>
        </>
      )}
      <Modal isOpen={kranModal[0]}>
        <ModalHeader>
          {kranModal[2] === 'Hidup'
            ? `Yakin mematikan ${kranModal[1]}?`
            : `Yakin menghidupkan kran ${kranModal[1]}?`}
        </ModalHeader>
        <ModalFooter>
          {kranModal[2] === 'Hidup' ? (
            <Button
              color="danger"
              onClick={() => {
                setKranValue(kranModal[1], kranModal[2]);
                setKranModal([!kranModal[0], '', '']);
              }}
            >
              Matikan
            </Button>
          ) : (
            <Button
              color="success"
              onClick={() => {
                setKranValue(kranModal[1], kranModal[2]);
                setKranModal([!kranModal[0], '', '']);
              }}
            >
              Hidupkan
            </Button>
          )}
          <Button
            outline
            onClick={() => {
              setKranModal([!kranModal[0], '', '']);
            }}
          >
            Batal
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={pompaModal[0]}>
        <ModalHeader>
          {pompaModal[2] === 'Hidup'
            ? `Yakin mematikan ${pompaModal[1]}?`
            : `Yakin menghidupkan kran ${pompaModal[1]}?`}
        </ModalHeader>
        <ModalFooter>
          {pompaModal[2] === 'Hidup' ? (
            <Button
              color="danger"
              onClick={() => {
                setPompaValue(pompaModal[1], pompaModal[2]);
                setPompaModal([!pompaModal[0], '', '']);
              }}
            >
              Matikan
            </Button>
          ) : (
            <Button
              color="success"
              onClick={() => {
                setPompaValue(pompaModal[1], pompaModal[2]);
                setPompaModal([!pompaModal[0], '', '']);
              }}
            >
              Hidupkan
            </Button>
          )}
          <Button
            outline
            onClick={() => {
              setPompaModal([!pompaModal[0], '', '']);
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
